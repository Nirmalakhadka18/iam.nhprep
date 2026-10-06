export interface Question {
  id: number;
  question: string;
  subtitle: string;
  category: string;
  difficulty?: 'easy' | 'medium' | 'hard';
  answer: {
    definition: string;
    howItWorks: string;
    authVsAuthz?: string;
    example: string;
    whyImportant: string;
    commonMistakes: string[];
    interviewPoints: string[];
    sampleAnswer: string;
  };
  visualization: {
    type?: string;
    layout?: string;
    steps: string[];
    inputs?: string[]; 
    outputs?: string[];
    stepExplanations: string[];
    terms?: { term: string; definition: string }[];
  };
  practice: {
    scenario: string;
    question: string;
    options: string[];
    correctAnswer: number;
    explanation: string;
  };
}
