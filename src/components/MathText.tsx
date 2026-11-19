import React, { useMemo } from 'react';
import katex from 'katex';

interface MathTextProps {
  text: string;
  className?: string;
}

type Segment =
  | { kind: 'text'; content: string }
  | { kind: 'inline-math'; content: string }
  | { kind: 'display-math'; content: string }
  | { kind: 'bold'; content: string }
  | { kind: 'code'; content: string };

function tokenizeMathAndFormatting(input: string): Segment[] {
  const segments: Segment[] = [];
  // Match $$...$$, $...$, **...**, or `...`
  const pattern = /(\$\$[\s\S]+?\$\$|\$[^$\n]+?\$|\*\*[^*]+?\*\*|`[^`]+?`)/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = pattern.exec(input)) !== null) {
    if (match.index > lastIndex) {
      segments.push({
        kind: 'text',
        content: input.slice(lastIndex, match.index),
      });
    }

    const token = match[0];
    if (token.startsWith('$$') && token.endsWith('$$')) {
      segments.push({
        kind: 'display-math',
        content: token.slice(2, -2).trim(),
      });
    } else if (token.startsWith('$') && token.endsWith('$')) {
      segments.push({
        kind: 'inline-math',
        content: token.slice(1, -1).trim(),
      });
    } else if (token.startsWith('**') && token.endsWith('**')) {
      segments.push({
        kind: 'bold',
        content: token.slice(2, -2),
      });
    } else if (token.startsWith('`') && token.endsWith('`')) {
      segments.push({
        kind: 'code',
        content: token.slice(1, -1),
      });
    }

    lastIndex = match.index + token.length;
  }

  if (lastIndex < input.length) {
    segments.push({
      kind: 'text',
      content: input.slice(lastIndex),
    });
  }

  return segments;
}

export const MathText: React.FC<MathTextProps> = ({ text, className = '' }) => {
  const segments = useMemo(() => tokenizeMathAndFormatting(text), [text]);

  return (
    <span className={`leading-relaxed break-words ${className}`}>
      {segments.map((seg, idx) => {
        if (seg.kind === 'display-math') {
          const html = katex.renderToString(seg.content, {
            displayMode: true,
            throwOnError: false,
          });
          return (
            <span
              key={idx}
              className="block w-full overflow-x-auto py-1"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          );
        }

        if (seg.kind === 'inline-math') {
          const html = katex.renderToString(seg.content, {
            displayMode: false,
            throwOnError: false,
          });
          return (
            <span
              key={idx}
              className="inline-block max-w-full align-middle"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          );
        }

        if (seg.kind === 'bold') {
          return (
            <strong key={idx} className="font-semibold text-[#0B3B40]">
              <MathText text={seg.content} />
            </strong>
          );
        }

        if (seg.kind === 'code') {
          return (
            <code
              key={idx}
              className="font-mono-tabular rounded bg-[#E6F7F5] px-1.5 py-0.5 text-[0.9em] text-[#0D5C63]"
            >
              {seg.content}
            </code>
          );
        }

        return <React.Fragment key={idx}>{seg.content}</React.Fragment>;
      })}
    </span>
  );
};
