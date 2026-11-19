import React from 'react';
import { AlertCircle, CheckCircle2 } from 'lucide-react';
import type { ClientQuestion, StudentAnswerValue } from '../types/quiz';
import { MathText } from './MathText';
import { PhysicsDiagram } from './PhysicsDiagrams';
import { NarratorBar } from './NarratorBar';
import { ShortAnswerTutorial } from './ShortAnswerTutorial';
import { parseNumericInput } from '../lib/gradingUtils';

interface QuestionViewProps {
  question: ClientQuestion;
  answer: StudentAnswerValue | undefined;
  onChangeAnswer: (questionId: number, value: StudentAnswerValue) => void;
}

export const QuestionView: React.FC<QuestionViewProps> = ({
  question,
  answer,
  onChangeAnswer,
}) => {
  const handleSingleChoice = (optionId: string) => {
    onChangeAnswer(question.id, optionId);
  };

  const handleComplexToggle = (optionId: string) => {
    const current = Array.isArray(answer)
      ? answer.filter((v): v is string => typeof v === 'string')
      : [];
    const exists = current.includes(optionId);
    const updated = exists
      ? current.filter((id) => id !== optionId)
      : [...current, optionId];
    onChangeAnswer(question.id, updated);
  };

  const handleTrueFalse = (statementIdx: number, val: boolean) => {
    const current: (boolean | null)[] = Array.isArray(answer)
      ? [0, 1, 2, 3].map((i) => {
          const item = answer[i];
          return item === true || item === false ? item : null;
        })
      : [null, null, null, null];
    current[statementIdx] = val;
    onChangeAnswer(question.id, current);
  };

  const numericRaw = typeof answer === 'string' ? answer : '';
  const numericValidation =
    question.type === 'short_numeric' ? parseNumericInput(numericRaw) : null;

  return (
    <div className="space-y-4">
      {/* Show Short Answer Tutorial before answering questions 6–10 */}
      {question.id >= 6 && <ShortAnswerTutorial />}

      <article
        aria-label={`Kartu Soal Nomor ${question.id}`}
        className="rounded-2xl border-2 border-[#CBE4E2] bg-white p-4 shadow-xs sm:p-6"
      >
        {/* Unboxed clean metadata header (Zero-Pill Discipline) */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#E6EFEF] pb-3">
          <div className="flex flex-col gap-0.5 text-xs font-medium text-[#48656A] sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-2">
            <span className="font-display text-sm font-bold text-[#0D5C63]">
              Soal {question.id} dari 10
            </span>
            <span className="hidden sm:inline" aria-hidden="true">·</span>
            <span>{question.typeLabel} — {question.topic}</span>
          </div>
          <span className="font-mono-tabular text-xs font-semibold text-[#0F766E]">
            Skor Maks: {question.maxScore}
          </span>
        </div>

        {/* MR Jo Voice Narrator for Question */}
        <div className="mt-4">
          <NarratorBar
            label="DENGARKAN SOAL"
            script={question.speechScript}
            contextKey={`q-${question.id}`}
          />
        </div>

        {/* Stimulus Text */}
        <div className="mt-4 space-y-4">
          <div className="text-[15px] leading-relaxed text-[#0F292E] sm:text-base">
            <MathText text={question.stimulusText} />
          </div>

          {/* Dedicated Mathematical SVG Diagram */}
          <PhysicsDiagram
            diagramId={question.diagramId}
            caption={question.diagramCaption}
          />

          {/* Question Prompt */}
          <div className="rounded-xl border border-[#DCECEB] bg-[#F8FBFC] p-3.5 text-[15px] font-medium leading-relaxed text-[#0B3B40] sm:text-base">
            <MathText text={question.questionPrompt} />
          </div>
        </div>

        {/* Answer Input Area per Question Type */}
        <div className="mt-5">
          {question.type === 'single_choice' && question.options && (
            <fieldset className="space-y-2.5">
              <legend className="sr-only">
                Pilihan jawaban soal {question.id}
              </legend>
              {question.options.map((opt) => {
                const selected = answer === opt.id;
                return (
                  <label
                    key={opt.id}
                    className={`flex min-h-[48px] items-start gap-3 rounded-xl border p-3.5 text-sm transition-colors cursor-pointer sm:text-[15px] ${
                      selected
                        ? 'border-[#0D5C63] bg-[#E6F7F5] text-[#0B3B40]'
                        : 'border-[#D9E6E8] bg-white text-[#0F292E] hover:border-[#14B8A6] hover:bg-[#F8FBFC]'
                    }`}
                  >
                    <input
                      type="radio"
                      name={`question-${question.id}`}
                      value={opt.id}
                      checked={selected}
                      onChange={() => handleSingleChoice(opt.id)}
                      className="mt-1 h-4 w-4 shrink-0 accent-[#0D5C63] cursor-pointer"
                    />
                    <span className="font-display font-bold text-[#0D5C63] shrink-0">
                      {opt.id}.
                    </span>
                    <span className="min-w-0 flex-1">
                      <MathText text={opt.text} />
                    </span>
                  </label>
                );
              })}
            </fieldset>
          )}

          {question.type === 'complex_choice' && question.options && (
            <fieldset className="space-y-2.5">
              <legend className="mb-1 text-xs font-medium text-[#48656A]">
                Pilih semua pernyataan yang benar (dapat lebih dari satu).
              </legend>
              {question.options.map((opt) => {
                const selectedList = Array.isArray(answer)
                  ? answer.filter((v): v is string => typeof v === 'string')
                  : [];
                const checked = selectedList.includes(opt.id);
                return (
                  <label
                    key={opt.id}
                    className={`flex min-h-[48px] items-start gap-3 rounded-xl border p-3.5 text-sm transition-colors cursor-pointer sm:text-[15px] ${
                      checked
                        ? 'border-[#0D5C63] bg-[#E6F7F5] text-[#0B3B40]'
                        : 'border-[#D9E6E8] bg-white text-[#0F292E] hover:border-[#14B8A6] hover:bg-[#F8FBFC]'
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={() => handleComplexToggle(opt.id)}
                      className="mt-1 h-4 w-4 shrink-0 rounded accent-[#0D5C63] cursor-pointer"
                    />
                    <span className="font-display font-bold text-[#0D5C63] shrink-0">
                      {opt.id}.
                    </span>
                    <span className="min-w-0 flex-1">
                      <MathText text={opt.text} />
                    </span>
                  </label>
                );
              })}
            </fieldset>
          )}

          {question.type === 'true_false' && question.statements && (
            <div className="space-y-3">
              <p className="text-xs font-medium text-[#48656A]">
                Skor tiap pernyataan: Benar (+2,5), Salah (−1), Tidak dijawab (0).
              </p>
              {question.statements.map((stmt, idx) => {
                const currentArr = Array.isArray(answer) ? answer : [];
                const val = currentArr[idx];
                return (
                  <div
                    key={stmt.id}
                    className="rounded-xl border border-[#D9E6E8] bg-[#FAFCFC] p-3.5 sm:p-4"
                  >
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                      <div className="min-w-0 flex-1 text-sm leading-relaxed text-[#0F292E] sm:text-[15px]">
                        <span className="mr-1.5 font-mono-tabular font-bold text-[#0D5C63]">
                          ({stmt.id})
                        </span>
                        <MathText text={stmt.text} />
                      </div>
                      <div
                        className="flex shrink-0 items-center gap-2"
                        role="group"
                        aria-label={`Pilihan Benar atau Salah untuk pernyataan ${stmt.id}`}
                      >
                        <button
                          type="button"
                          onClick={() => handleTrueFalse(idx, true)}
                          aria-pressed={val === true}
                          className={`min-h-[40px] min-w-[76px] rounded-lg border px-3 py-1.5 text-xs font-bold transition-colors cursor-pointer ${
                            val === true
                              ? 'border-[#0D5C63] bg-[#0D5C63] text-white'
                              : 'border-[#CBD8DA] bg-white text-[#0F292E] hover:border-[#0D5C63]'
                          }`}
                        >
                          Benar
                        </button>
                        <button
                          type="button"
                          onClick={() => handleTrueFalse(idx, false)}
                          aria-pressed={val === false}
                          className={`min-h-[40px] min-w-[76px] rounded-lg border px-3 py-1.5 text-xs font-bold transition-colors cursor-pointer ${
                            val === false
                              ? 'border-[#B45309] bg-[#B45309] text-white'
                              : 'border-[#CBD8DA] bg-white text-[#0F292E] hover:border-[#B45309]'
                          }`}
                        >
                          Salah
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {question.type === 'short_numeric' && (
            <div className="space-y-2.5">
              <label
                htmlFor={`numeric-input-${question.id}`}
                className="block text-sm font-semibold text-[#0F292E]"
              >
                Jawaban Numerik (masukkan angka saja tanpa satuan
                {question.numericUnit ? ` — satuan soal: ${question.numericUnit}` : ''})
              </label>
              <div className="flex items-center gap-2.5">
                <input
                  id={`numeric-input-${question.id}`}
                  type="text"
                  inputMode="text"
                  value={numericRaw}
                  onChange={(e) => onChangeAnswer(question.id, e.target.value)}
                  placeholder={question.numericPlaceholder || 'Masukkan angka'}
                  className="w-full max-w-xs min-h-[46px] rounded-lg border border-[#CBD8DA] bg-[#FAFCFC] px-3.5 py-2.5 font-mono-tabular text-base font-medium text-[#0F292E] placeholder:text-[#7E969A] focus:border-[#0D5C63] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0D5C63]/20"
                />
                {question.numericUnit && (
                  <span className="font-mono-tabular text-xs font-semibold text-[#48656A] whitespace-nowrap">
                    ({question.numericUnit})
                  </span>
                )}
              </div>

              {numericValidation && !numericValidation.isEmpty && (
                <div
                  className={`flex items-start gap-2 rounded-lg px-3 py-2 text-xs ${
                    numericValidation.valid
                      ? 'bg-[#E6F7F5] text-[#0D5C63]'
                      : 'bg-[#FEF2F2] text-[#991B1B]'
                  }`}
                >
                  {numericValidation.valid ? (
                    <>
                      <CheckCircle2
                        className="mt-0.5 h-3.5 w-3.5 shrink-0"
                        aria-hidden="true"
                      />
                      <span>
                        Format valid · Terbaca sistem sebagai nilai numerik{' '}
                        <strong className="font-mono-tabular">
                          {numericValidation.value}
                        </strong>
                        .
                      </span>
                    </>
                  ) : (
                    <>
                      <AlertCircle
                        className="mt-0.5 h-3.5 w-3.5 shrink-0"
                        aria-hidden="true"
                      />
                      <span>{numericValidation.feedback}</span>
                    </>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </article>
    </div>
  );
};
