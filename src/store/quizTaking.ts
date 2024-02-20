import { type QuizType } from "types/quiz";
import { create } from "zustand";

interface QuizState {
  quiz: QuizType | null;
  userProgress: {
    currentQuestionIndex: number;
    selectedAnswers: string[];
    correctAnswersCount: number;
  };
}

interface QuizStore extends QuizState {
  setQuiz: (quiz: QuizType) => void;
  goToNextQuestion: () => void;
  goToPreviousQuestion: () => void;
  selectAnswer: (optionId: string) => void;
  resetAnswers: () => void;
  computeScore: () => void;
}

const useQuizTakingStore = create<QuizStore>((set) => ({
  quiz: null,
  userProgress: {
    currentQuestionIndex: 0,
    selectedAnswers: [],
    correctAnswersCount: 0,
  },
  setQuiz: (quiz: QuizType) => {
    set({ quiz });
  },
  goToNextQuestion: () => {
    set((state) => ({
      userProgress: {
        ...state.userProgress,
        currentQuestionIndex: state.userProgress.currentQuestionIndex + 1,
      },
    }));
  },
  goToPreviousQuestion: () => {
    set((state) => ({
      userProgress: {
        ...state.userProgress,
        currentQuestionIndex: Math.max(
          0,
          state.userProgress.currentQuestionIndex - 1,
        ),
      },
    }));
  },
  selectAnswer: (optionId) => {
    set((state) => {
      const updatedAnswers = [...state.userProgress.selectedAnswers];
      updatedAnswers[state.userProgress.currentQuestionIndex] = optionId;

      return {
        userProgress: {
          ...state.userProgress,
          selectedAnswers: updatedAnswers,
        },
      };
    });
  },
  resetAnswers: () => {
    set((state) => ({
      userProgress: {
        currentQuestionIndex: 0,
        selectedAnswers: [],
        correctAnswersCount: 0,
      },
    }));
  },
  computeScore: () => {
    set((state) => {
      const score = state.quiz?.questions.reduce(
        (totalScore, question, index) => {
          const correctAnswerId = question.correctAnswer;
          const selectedAnswerId = state.userProgress.selectedAnswers[index];

          return totalScore + (selectedAnswerId === correctAnswerId ? 1 : 0);
        },
        0,
      );

      const correctAnswersCount = score ?? 0;

      return {
        userProgress: {
          ...state.userProgress,
          correctAnswersCount,
        },
      };
    });
  },
}));

export default useQuizTakingStore;
