export type CalloutType =
  | 'importante'
  | 'atencao'
  | 'guarde_isso'
  | 'na_prova'
  | 'cuidado_com_a_pegadinha'
  | 'olhar_cebraspe'
  | 'exemplo'
  | 'compare'
  | 'em_outras_palavras'
  | 'resumindo';

export interface CalloutItem {
  type: CalloutType;
  title?: string;
  content: string;
  comparisonItems?: {
    conceptA: { label: string; details: string };
    conceptB: { label: string; details: string };
  };
}

export interface ContentSection {
  subheading: string;
  paragraphs: string[];
  bulletPoints?: string[];
  callouts?: CalloutItem[];
  tableData?: {
    headers: string[];
    rows: string[][];
  };
}

export interface StudyBlock {
  id: number;
  number: string; // "01", "02", etc.
  title: string;
  topicTag: string;
  shortIntro: string;
  estimatedMinutes: number;
  sections: ContentSection[];
  keyTakeaways: string[];
  sourceReference: {
    sectionName: string;
    pageRange: string;
  };
}

export type AnswerType = 'CERTO' | 'ERRADO';

export type CognitiveLevel =
  | 'Nível 1 — Domínio Conceitual'
  | 'Nível 2 — Relação entre Regras e Condições'
  | 'Nível 3 — Análise Crítica e Inferência';

export interface CebraspeQuestion {
  id: number;
  blockId: number;
  topic: string;
  topicTag?: string;
  subtopic: string;
  command: string; // e.g. "A respeito de..., julgue o item a seguir."
  statement: string; // Assertiva
  correctAnswer: AnswerType;
  explanation: string; // Explicação detalhada
  wrongPoint?: string; // Se ERRADO: Ponto exato do erro
  correctedStatement?: string; // Se ERRADO: Como ficaria correto
  trapDna?: string; // DNA da armadilha CEBRASPE (ex: "Inversão conceitual", "Generalização indevida")
  cognitiveLevel: CognitiveLevel;
  sourceReference: {
    blockNumber: string;
    blockTitle: string;
    lessonPage: string;
  };
}

export interface QuickReviewTopic {
  title: string;
  keyPoints: string[];
  cebraspeAlert: string;
}

export interface StudySessionData {
  title: string;
  subtitle: string;
  courseTitle: string;
  author: string;
  targetExam: string;
  overview: string;
  learningObjectives: string[];
  estimatedTotalMinutes: number;
  blocks: StudyBlock[];
  quickReview: QuickReviewTopic[];
  questions: CebraspeQuestion[];
}

export type AppView =
  | 'intro'
  | 'block'
  | 'quick-review'
  | 'quiz-intro'
  | 'quiz'
  | 'results'
  | 'mistakes';

export interface UserProgressState {
  currentView: AppView;
  activeBlockId: number;
  completedBlocks: number[]; // Block IDs
  quizAnswers: Record<number, AnswerType>; // questionId -> chosen answer
  currentQuestionIndex: number;
  theme: 'light' | 'dark';
  fontSize: 'normal' | 'large' | 'extra';
}
