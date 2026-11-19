import type {
  AnswersMap,
  QuestionType,
  StudentAnswerValue,
} from '../types/quiz';

export interface NumericParseResult {
  isEmpty: boolean;
  valid: boolean;
  value: number | null;
  normalized: string;
  feedback?: string;
}

/**
 * Parses and validates numeric input for short-answer physics questions.
 * Accepts integers, dot/comma decimals (e.g., 2.5 or 2,5), negative numbers (-2.8),
 * and scientific notation (e.g., 3.2e4 or 2e3).
 * Rejects units, spaces inside the number, or non-numeric characters so students
 * get immediate formatting guidance instead of losing points silently.
 */
export function parseNumericInput(raw: string): NumericParseResult {
  if (raw === '') {
    return {
      isEmpty: true,
      valid: false,
      value: null,
      normalized: '',
    };
  }

  if (/\s/.test(raw)) {
    return {
      isEmpty: false,
      valid: false,
      value: null,
      normalized: '',
      feedback: 'Hindari penggunaan spasi. Tulis angka saja, misalnya -2.8 atau 3.2e4.',
    };
  }

  // Reject units or unexpected letters (allow only digits, +, -, ., ,, e, E)
  if (/[^0-9+\-.,eE]/.test(raw)) {
    return {
      isEmpty: false,
      valid: false,
      value: null,
      normalized: '',
      feedback: 'Masukkan nilai numerik saja tanpa menuliskan satuan atau simbol lain.',
    };
  }

  const normalized = raw.replace(/,/g, '.');
  const strictNumericPattern = /^[+-]?(\d+(\.\d+)?|\.\d+)([eE][+-]?\d+)?$/;

  if (!strictNumericPattern.test(normalized)) {
    return {
      isEmpty: false,
      valid: false,
      value: null,
      normalized,
      feedback: 'Format bilangan belum valid. Contoh format yang benar: 25, 2.5, -12, atau 3.2e4.',
    };
  }

  const parsed = Number(normalized);
  if (!Number.isFinite(parsed)) {
    return {
      isEmpty: false,
      valid: false,
      value: null,
      normalized,
      feedback: 'Nilai bilangan berada di luar jangkauan numerik.',
    };
  }

  return {
    isEmpty: false,
    valid: true,
    value: parsed,
    normalized,
  };
}

export function scoreMultipleChoice(
  studentAnswer: StudentAnswerValue | undefined,
  correctOptionId: string,
  maxScore = 10
): number {
  if (typeof studentAnswer !== 'string' || studentAnswer.trim() === '') {
    return 0;
  }
  return studentAnswer.trim().toUpperCase() === correctOptionId.toUpperCase()
    ? maxScore
    : 0;
}

export function scoreComplexMC(
  studentAnswer: StudentAnswerValue | undefined,
  correctOptionIds: string[],
  maxScore = 10
): number {
  if (!Array.isArray(studentAnswer) || studentAnswer.length === 0) {
    return 0;
  }
  const normalizedStudent = Array.from(
    new Set(studentAnswer.map((s) => String(s).trim().toUpperCase()).filter(Boolean))
  ).sort();
  const normalizedCorrect = Array.from(
    new Set(correctOptionIds.map((s) => s.trim().toUpperCase()))
  ).sort();

  if (normalizedStudent.length !== normalizedCorrect.length) {
    return 0;
  }
  for (let i = 0; i < normalizedCorrect.length; i += 1) {
    if (normalizedStudent[i] !== normalizedCorrect[i]) {
      return 0;
    }
  }
  return maxScore;
}

/**
 * True/False scoring with penalty:
 * +2.5 per correct statement, -1 per wrong statement, 0 if unanswered.
 * Minimum -4, maximum +10.
 */
export function scoreTrueFalse(
  studentAnswer: StudentAnswerValue | undefined,
  correctBooleans: boolean[]
): number {
  if (!Array.isArray(studentAnswer)) {
    return 0;
  }
  let score = 0;
  for (let i = 0; i < correctBooleans.length; i += 1) {
    const val = studentAnswer[i];
    if (val === true || val === false) {
      score += val === correctBooleans[i] ? 2.5 : -1;
    }
  }
  return score;
}

export function scoreNumericWithTolerance(
  studentAnswer: StudentAnswerValue | undefined,
  expectedValue: number,
  tolerance: number,
  maxScore = 10
): number {
  if (typeof studentAnswer !== 'string' || studentAnswer.trim() === '') {
    return 0;
  }
  const parsed = parseNumericInput(studentAnswer);
  if (!parsed.valid || parsed.value === null) {
    return 0;
  }
  return Math.abs(parsed.value - expectedValue) <= tolerance ? maxScore : 0;
}

export function isQuestionAnswered(
  type: QuestionType,
  answer: StudentAnswerValue | undefined
): boolean {
  if (answer === undefined) {
    return false;
  }
  if (type === 'single_choice') {
    return typeof answer === 'string' && answer.trim().length > 0;
  }
  if (type === 'complex_choice') {
    return Array.isArray(answer) && answer.length > 0;
  }
  if (type === 'true_false') {
    return (
      Array.isArray(answer) &&
      answer.some((item) => item === true || item === false)
    );
  }
  if (type === 'short_numeric') {
    return typeof answer === 'string' && answer.trim().length > 0;
  }
  return false;
}

export function formatStudentAnswerDisplay(
  type: QuestionType,
  answer: StudentAnswerValue | undefined
): string {
  if (!isQuestionAnswered(type, answer)) {
    return 'Belum dijawab';
  }
  if (type === 'single_choice' && typeof answer === 'string') {
    return `Opsi ${answer}`;
  }
  if (type === 'complex_choice' && Array.isArray(answer)) {
    return [...answer].sort().join(', ');
  }
  if (type === 'true_false' && Array.isArray(answer)) {
    return answer
      .map((val, idx) => {
        const label =
          val === true ? 'Benar' : val === false ? 'Salah' : 'Kosong';
        return `(${idx + 1}) ${label}`;
      })
      .join(' · ');
  }
  if (type === 'short_numeric' && typeof answer === 'string') {
    const parsed = parseNumericInput(answer);
    return parsed.valid && parsed.normalized !== answer
      ? `${answer} (=${parsed.normalized})`
      : answer;
  }
  return 'Belum dijawab';
}

export interface ServerAnswerKey {
  questionId: number;
  type: QuestionType;
  maxScore: number;
  correctOption?: string;
  correctOptions?: string[];
  correctBooleans?: boolean[];
  correctNumber?: number;
  tolerance?: number;
  correctAnswerDisplay: string;
}

export function gradeSingleQuestion(
  key: ServerAnswerKey,
  studentAnswer: StudentAnswerValue | undefined
): { earnedScore: number; isAnswered: boolean; isFullyCorrect: boolean } {
  const answered = isQuestionAnswered(key.type, studentAnswer);
  let earnedScore = 0;

  if (key.type === 'single_choice' && key.correctOption) {
    earnedScore = scoreMultipleChoice(studentAnswer, key.correctOption, key.maxScore);
  } else if (key.type === 'complex_choice' && key.correctOptions) {
    earnedScore = scoreComplexMC(studentAnswer, key.correctOptions, key.maxScore);
  } else if (key.type === 'true_false' && key.correctBooleans) {
    earnedScore = scoreTrueFalse(studentAnswer, key.correctBooleans);
  } else if (
    key.type === 'short_numeric' &&
    typeof key.correctNumber === 'number' &&
    typeof key.tolerance === 'number'
  ) {
    earnedScore = scoreNumericWithTolerance(
      studentAnswer,
      key.correctNumber,
      key.tolerance,
      key.maxScore
    );
  }

  return {
    earnedScore,
    isAnswered: answered,
    isFullyCorrect: earnedScore === key.maxScore,
  };
}

export function computeAssessmentSummary(
  answers: AnswersMap,
  keys: ServerAnswerKey[]
) {
  let totalScore = 0;
  let maxTotalScore = 0;
  let answeredCount = 0;

  const breakdowns = keys.map((key) => {
    const studentAnswer = answers[key.questionId];
    const graded = gradeSingleQuestion(key, studentAnswer);
    totalScore += graded.earnedScore;
    maxTotalScore += key.maxScore;
    if (graded.isAnswered) {
      answeredCount += 1;
    }
    return {
      questionId: key.questionId,
      type: key.type,
      maxScore: key.maxScore,
      earnedScore: graded.earnedScore,
      isAnswered: graded.isAnswered,
      isFullyCorrect: graded.isFullyCorrect,
      studentAnswerDisplay: formatStudentAnswerDisplay(key.type, studentAnswer),
      correctAnswerDisplay: key.correctAnswerDisplay,
    };
  });

  // Ensure displayed score percentage never drops below 0% if Q5 penalty makes total negative
  const rawPercentage =
    maxTotalScore > 0 ? (totalScore / maxTotalScore) * 100 : 0;
  const percentage = Math.max(0, Math.round(rawPercentage * 10) / 10);

  return {
    totalScore,
    maxTotalScore,
    answeredCount,
    unansweredCount: keys.length - answeredCount,
    totalQuestions: keys.length,
    percentage,
    breakdowns,
  };
}
