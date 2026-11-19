export type QuestionType =
  | 'single_choice'
  | 'complex_choice'
  | 'true_false'
  | 'short_numeric';

export interface QuestionOption {
  id: string; // 'A' | 'B' | 'C' | 'D' | 'E'
  text: string;
}

export interface TrueFalseStatement {
  id: string; // '1' | '2' | '3' | '4'
  text: string;
}

export interface ClientQuestion {
  id: number; // 1..10
  type: QuestionType;
  typeLabel: string;
  topic: string;
  maxScore: number;
  stimulusText: string;
  questionPrompt: string;
  diagramId: string;
  diagramCaption: string;
  options?: QuestionOption[];
  statements?: TrueFalseStatement[];
  numericUnit?: string;
  numericPlaceholder?: string;
  speechScript: string;
}

export type StudentAnswerValue =
  | string // single_choice ('A'..'E') or short_numeric ('5.6')
  | string[] // complex_choice (['A', 'C', 'E'])
  | (boolean | null)[]; // true_false ([true, false, null, true])

export type AnswersMap = Record<number, StudentAnswerValue>;

export interface StudentIdentity {
  fullName: string;
  className: string;
}

export interface QuestionBreakdown {
  questionId: number;
  type: QuestionType;
  maxScore: number;
  earnedScore: number;
  isAnswered: boolean;
  isFullyCorrect: boolean;
  studentAnswerDisplay: string;
  correctAnswerDisplay?: string; // Only populated in Teacher Mode
}

export interface SubmissionResult {
  student: StudentIdentity;
  submittedAt: string;
  answeredCount: number;
  unansweredCount: number;
  totalQuestions: number;
  totalScore: number;
  maxTotalScore: number;
  percentage: number;
}

export interface SolutionDiagramSpec {
  id: string;
  caption: string;
}

export interface DetailedSolution {
  questionId: number;
  correctAnswerDisplay: string;
  understanding: string;
  theoreticalBasis: string;
  diagramExplanation: string;
  solutionDiagramId: string;
  mathematicalSteps: string[];
  analysisAndInterpretation: string;
  conclusion: string;
  speechScript: string;
}

export interface TeacherEvaluationResponse {
  authenticated: boolean;
  result: SubmissionResult;
  breakdowns: QuestionBreakdown[];
  solutions: DetailedSolution[];
}

export interface StoredQuizState {
  student: StudentIdentity | null;
  currentQuestionId: number;
  answers: AnswersMap;
  submittedResult: SubmissionResult | null;
  lastSavedAt: string | null;
}
