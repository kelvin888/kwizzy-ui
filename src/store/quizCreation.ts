import create, { type SetState } from "zustand";
import { v4 as uuidv4 } from "uuid";

interface Option {
  id: string;
  text: string;
}

interface Question {
  id: string;
  questionText: string;
  options: Option[];
}

interface QuizState {
  quizName: string;
  questions: Question[];
  addQuestion: (questionText: string) => void;
  updateQuestion: (questionId: string, text: string) => void;
  addOptionToQuestion: (questionId: string, option: string) => void;
  updateOption: (questionId: string, optionId: string, text: string) => void;
  setQuizName: (title: string) => void;
}

const useQuizStore = create<QuizState>((set: SetState<QuizState>) => ({
  quizName: "",
  questions: [
    {
      id: uuidv4(),
      questionText: "",
      options: [
        { id: uuidv4(), text: "" },
        { id: uuidv4(), text: "" },
      ],
    },
  ],
  addQuestion: (questionText) => {
    set((state) => ({
      questions: [
        ...state.questions,
        {
          id: uuidv4(),
          questionText,
          options: [
            { id: uuidv4(), text: "" },
            { id: uuidv4(), text: "" },
          ],
        },
      ],
    }));
  },
  updateQuestion: (questionId, text) => {
    set((state) => {
      const updatedQuestions = [...state.questions];
      const questionIndex = updatedQuestions.findIndex(
        (question) => question.id === questionId,
      );
      updatedQuestions[questionIndex].questionText = text;
      return { questions: updatedQuestions };
    });
  },
  addOptionToQuestion: (questionId, option) => {
    set((state) => {
      const updatedQuestions = [...state.questions];
      const questionIndex = updatedQuestions.findIndex(
        (question) => question.id === questionId,
      );
      const optionId = uuidv4();
      updatedQuestions[questionIndex].options.push({
        id: optionId,
        text: option,
      });
      return { questions: updatedQuestions };
    });
  },
  updateOption: (questionId, optionId, text) => {
    set((state) => {
      const updatedQuestions = [...state.questions];
      const questionIndex = updatedQuestions.findIndex(
        (question) => question.id === questionId,
      );
      const optionIndex = updatedQuestions[questionIndex].options.findIndex(
        (option) => option.id === optionId,
      );
      updatedQuestions[questionIndex].options[optionIndex].text = text;
      return { questions: updatedQuestions };
    });
  },
  setQuizName: (title) => {
    set({ quizName: title });
  },
}));

export default useQuizStore;
