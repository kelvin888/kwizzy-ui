import {create} from 'zustand';

interface QuizState {
  quiz: Quiz | null;
  userProgress: {
    currentQuestionIndex: number;
    selectedAnswers: number[];
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
}

const useQuizStore = create<QuizStore>((set) => ({
  quiz: {title: "Quiz Title", questions: []},
  userProgress: {
    currentQuestionIndex: 0,
    selectedAnswers: [],
  },
  setQuiz: (quiz: Quiz) => set({ quiz }),
  goToNextQuestion: () => set((state) => ({ userProgress: { ...state.userProgress, currentQuestionIndex: state.userProgress.currentQuestionIndex + 1 } })),
  goToPreviousQuestion: () => set((state) => ({ userProgress: { ...state.userProgress, currentQuestionIndex: state.userProgress.currentQuestionIndex - 1 } })),
  selectAnswer: (answerIndex) => set((state) => ({
    userProgress: {
      ...state.userProgress,
      selectedAnswers: [
        ...state.userProgress.selectedAnswers.slice(0, state.userProgress.currentQuestionIndex),
        answerIndex,
        ...state.userProgress.selectedAnswers.slice(state.userProgress.currentQuestionIndex + 1),
      ],
    },
  })),
}));

export default useQuizStore;
