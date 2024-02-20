export interface Option {
  id: string;
  text: string;
}

export interface QuizType {
  id: string;
  title: string;
  questions: Question[];
}

export interface Question {
  id: string;
  questionText: string;
  options: Option[];
  correctAnswer: string;
}

export interface QuizCreationData {
  title: string;
  questions: Question[];
}

export interface QuizCreationResponseData {
  data: QuizCreationData;
}

export interface QuizResponseData {
  data: QuizType[];
}
