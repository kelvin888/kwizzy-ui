import { create } from 'zustand';
import historyQuiz from './quizData';

interface QuizState {
  quiz: Quiz | null;
  userProgress: {
    currentQuestionIndex: number;
    selectedAnswers: number[];
    correctAnswersCount: number; 
  };
}

interface Quiz {
  title: string;
  questions: QuizQuestion[];
}

interface QuizQuestion {
  id: number;
  text: string;
  options: string[];
  correctAnswer: number;
}

interface QuizStore extends QuizState {
  setQuiz: (quiz: Quiz) => void;
  goToNextQuestion: () => void;
  goToPreviousQuestion: () => void;
  selectAnswer: (answerIndex: number) => void;
  resetAnswers: () => void;
  computeScore: () => void
}

const useQuizTakingStore = create<QuizStore>((set) => ({
  quiz: historyQuiz,
  userProgress: {
    currentQuestionIndex: 0,
    selectedAnswers: [],
    correctAnswersCount: 0
  },
  setQuiz: (quiz: Quiz) => set({ quiz }),
  goToNextQuestion: () => set((state) => ({ userProgress: { ...state.userProgress, currentQuestionIndex: state.userProgress.currentQuestionIndex + 1 } })),
  goToPreviousQuestion: () => set((state) => ({
    userProgress: {
      ...state.userProgress,
      currentQuestionIndex: Math.max(0, state.userProgress.currentQuestionIndex - 1), // Ensure it doesn't go below 0
    },
  })),
  selectAnswer: (answerIndex) => set((state) => {
    const updatedAnswers = [...state.userProgress.selectedAnswers];
    updatedAnswers[state.userProgress.currentQuestionIndex] = answerIndex;

    return {
      userProgress: {
        ...state.userProgress,
        selectedAnswers: updatedAnswers,
      },
    };
  }),
  resetAnswers: () => set((state) => ({
    userProgress: {
      currentQuestionIndex: 0,
      selectedAnswers: [],
      correctAnswersCount: 0
    },
  })),
  computeScore: () => set((state) => {
    const score = state.quiz?.questions.reduce((totalScore, question, index) => {
      const correctAnswer = question.correctAnswer;
      const selectedAnswer = state.userProgress.selectedAnswers[index];
      
      return totalScore + (selectedAnswer === correctAnswer ? 1 : 0);
    }, 0) || 0;

    console.log("final result: ", score);

    return {
      userProgress: {
        ...state.userProgress,
        correctAnswersCount: score,
      },
    };
  }),

}));

export default useQuizTakingStore;
