import React, { useEffect, useRef, useState } from 'react';
import { Pause, Play, RotateCcw, Square, Volume2 } from 'lucide-react';

interface NarratorBarProps {
  label: string; // e.g. "DENGARKAN SOAL" or "DENGARKAN PEMBAHASAN"
  script: string;
  contextKey: string | number; // Stops playback automatically when changing question
}

type SpeechStatus = 'idle' | 'playing' | 'paused';

function splitIntoChunks(text: string): string[] {
  const sentences = text
    .split(/(?<=[.!?])\s+/)
    .map((s) => s.trim())
    .filter(Boolean);
  const chunks: string[] = [];
  let buffer = '';

  for (const sentence of sentences) {
    if ((buffer + ' ' + sentence).trim().length > 180 && buffer.length > 0) {
      chunks.push(buffer.trim());
      buffer = sentence;
    } else {
      buffer = (buffer + ' ' + sentence).trim();
    }
  }
  if (buffer.length > 0) {
    chunks.push(buffer.trim());
  }
  return chunks.length > 0 ? chunks : [text];
}

function selectIndonesianMaleVoice(
  voices: SpeechSynthesisVoice[]
): SpeechSynthesisVoice | null {
  if (!voices.length) return null;

  const idVoices = voices.filter((v) =>
    v.lang.toLowerCase().startsWith('id')
  );

  // Prefer explicit male Indonesian voices if present
  const maleKeywords = ['ardi', 'andika', 'male', 'pria', 'budi', 'google bahasa indonesia'];
  for (const keyword of maleKeywords) {
    const match = idVoices.find((v) => v.name.toLowerCase().includes(keyword));
    if (match) return match;
  }

  if (idVoices.length > 0) {
    return idVoices[0];
  }

  return voices[0];
}

export const NarratorBar: React.FC<NarratorBarProps> = ({
  label,
  script,
  contextKey,
}) => {
  const [status, setStatus] = useState<SpeechStatus>('idle');
  const [rate, setRate] = useState<number>(1.0);
  const [supported, setSupported] = useState<boolean>(true);
  const [voiceName, setVoiceName] = useState<string>('');
  const [chunkProgress, setChunkProgress] = useState<{ current: number; total: number }>({
    current: 0,
    total: 0,
  });

  const chunksRef = useRef<string[]>([]);
  const chunkIndexRef = useRef<number>(0);
  const activeRunIdRef = useRef<number>(0);
  const rateRef = useRef<number>(rate);
  rateRef.current = rate;

  useEffect(() => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      setSupported(false);
      return;
    }

    const updateVoice = () => {
      const voices = window.speechSynthesis.getVoices();
      const chosen = selectIndonesianMaleVoice(voices);
      if (chosen) {
        setVoiceName(chosen.name);
      }
    };

    updateVoice();
    window.speechSynthesis.addEventListener?.('voiceschanged', updateVoice);
    return () => {
      window.speechSynthesis.removeEventListener?.('voiceschanged', updateVoice);
    };
  }, []);

  const stopSpeech = () => {
    activeRunIdRef.current += 1;
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    setStatus('idle');
    setChunkProgress({ current: 0, total: 0 });
  };

  // Stop when switching question or unmounting
  useEffect(() => {
    stopSpeech();
    return () => {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, [contextKey]);

  const speakChunk = (runId: number, idx: number) => {
    if (runId !== activeRunIdRef.current) return;
    const chunks = chunksRef.current;
    if (idx >= chunks.length) {
      setStatus('idle');
      setChunkProgress({ current: 0, total: 0 });
      return;
    }

    chunkIndexRef.current = idx;
    setChunkProgress({ current: idx + 1, total: chunks.length });

    const utterance = new SpeechSynthesisUtterance(chunks[idx]);
    const voices = window.speechSynthesis.getVoices();
    const chosen = selectIndonesianMaleVoice(voices);
    if (chosen) {
      utterance.voice = chosen;
      utterance.lang = chosen.lang || 'id-ID';
    } else {
      utterance.lang = 'id-ID';
    }

    // Calm, authoritative Physics teacher tone (MR Jo)
    utterance.rate = rateRef.current;
    utterance.pitch = 0.92;
    utterance.volume = 1.0;

    utterance.onend = () => {
      if (runId === activeRunIdRef.current) {
        speakChunk(runId, idx + 1);
      }
    };

    utterance.onerror = () => {
      if (runId === activeRunIdRef.current) {
        setStatus('idle');
      }
    };

    window.speechSynthesis.speak(utterance);
  };

  const handlePlay = () => {
    if (!supported) return;
    window.speechSynthesis.cancel();
    const runId = activeRunIdRef.current + 1;
    activeRunIdRef.current = runId;
    chunksRef.current = splitIntoChunks(script);
    setStatus('playing');
    speakChunk(runId, 0);
  };

  const handlePause = () => {
    if (!supported || status !== 'playing') return;
    window.speechSynthesis.pause();
    setStatus('paused');
  };

  const handleResume = () => {
    if (!supported || status !== 'paused') return;
    window.speechSynthesis.resume();
    setStatus('playing');
  };

  const handleRateChange = (newRate: number) => {
    setRate(newRate);
    rateRef.current = newRate;
    if (status === 'playing' || status === 'paused') {
      // Restart from current chunk at updated speed for clean immediate application
      const currentIdx = chunkIndexRef.current;
      window.speechSynthesis.cancel();
      const runId = activeRunIdRef.current + 1;
      activeRunIdRef.current = runId;
      setStatus('playing');
      speakChunk(runId, currentIdx);
    }
  };

  if (!supported) {
    return (
      <div className="rounded-lg border border-[#D9E6E8] bg-[#F8FBFC] px-3 py-2 text-xs text-[#48656A]">
        Narator suara MR Jo tidak didukung oleh peramban ini.
      </div>
    );
  }

  return (
    <div
      className="flex flex-wrap items-center justify-between gap-2.5 rounded-lg border border-[#CBE4E2] bg-[#F2FAF9] px-3 py-2.5"
      aria-label={`Kontrol narator suara MR Jo: ${label}`}
    >
      <div className="flex items-center gap-2 min-w-0">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-[#0D5C63] text-white">
          <Volume2 className="h-4 w-4" aria-hidden="true" />
        </span>
        <div className="min-w-0">
          <p className="text-xs font-semibold text-[#0D5C63] truncate">
            Narator Suara MR Jo
          </p>
          <p className="text-[11px] text-[#48656A] truncate">
            {status === 'playing' && chunkProgress.total > 0
              ? `Membacakan bagian ${chunkProgress.current}/${chunkProgress.total}`
              : status === 'paused'
              ? 'Narasi dijeda'
              : voiceName
              ? `Siap · ${voiceName.slice(0, 28)}`
              : 'Bahasa Indonesia · Tempo sedang'}
          </p>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-1.5">
        {status === 'idle' && (
          <button
            type="button"
            onClick={handlePlay}
            className="inline-flex min-h-[38px] items-center gap-1.5 rounded-md bg-[#0D5C63] px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-[#09474D] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0D5C63] whitespace-nowrap shrink-0 cursor-pointer"
          >
            <Play className="h-3.5 w-3.5" aria-hidden="true" />
            <span>{label}</span>
          </button>
        )}

        {status === 'playing' && (
          <button
            type="button"
            onClick={handlePause}
            className="inline-flex min-h-[38px] items-center gap-1.5 rounded-md bg-[#0D5C63] px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-[#09474D] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0D5C63] whitespace-nowrap shrink-0 cursor-pointer"
          >
            <Pause className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Jeda</span>
          </button>
        )}

        {status === 'paused' && (
          <button
            type="button"
            onClick={handleResume}
            className="inline-flex min-h-[38px] items-center gap-1.5 rounded-md bg-[#0D5C63] px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-[#09474D] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0D5C63] whitespace-nowrap shrink-0 cursor-pointer"
          >
            <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Lanjutkan</span>
          </button>
        )}

        {status !== 'idle' && (
          <button
            type="button"
            onClick={stopSpeech}
            className="inline-flex min-h-[38px] items-center gap-1 rounded-md border border-[#CBE4E2] bg-white px-2.5 py-1.5 text-xs font-medium text-[#0F292E] transition-colors hover:bg-[#E6F7F5] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0D5C63] whitespace-nowrap shrink-0 cursor-pointer"
          >
            <Square className="h-3 w-3" aria-hidden="true" />
            <span>Stop</span>
          </button>
        )}

        <label className="inline-flex items-center gap-1 rounded-md border border-[#CBE4E2] bg-white px-2 py-1 text-xs text-[#0F292E]">
          <span className="text-[11px] text-[#48656A]">Kecepatan</span>
          <select
            aria-label="Kecepatan suara narator MR Jo"
            value={rate}
            onChange={(e) => handleRateChange(Number(e.target.value))}
            className="bg-transparent font-mono-tabular text-xs font-medium text-[#0D5C63] focus:outline-none cursor-pointer"
          >
            <option value={0.85}>0.85x</option>
            <option value={1}>1.0x</option>
            <option value={1.15}>1.15x</option>
            <option value={1.25}>1.25x</option>
          </select>
        </label>
      </div>
    </div>
  );
};
