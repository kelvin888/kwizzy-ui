import create, { SetState } from 'zustand';
import { v4 as uuidv4 } from 'uuid';

interface Option {
    id: string;
    text: string;
}[]

interface Question {
    id: string;
    questionText: string;
    options: Option[];
}

interface QuizState {
    quizTitle: string;
    questions: Question[];
    addQuestion: (questionText: string) => void;
    updateQuestion: (index: number, text: string) => void;
    addOptionToQuestion: (index: number, option: string) => void;
    setQuizTitle: (title: string) => void;
}

const useQuizStore = create<QuizState>((set: SetState<QuizState>) => ({
    quizTitle: '',
    questions: [{
        id: uuidv4(),
        questionText: 'emptyQuestion',
        options: [
            { id: uuidv4(), text: "" }
        ]
    }],
    addQuestion: (questionText) => {
        set((state) => ({
            questions: [...state.questions,
            {
                id: uuidv4(),
                questionText,
                options: [
                    { id: uuidv4(), text: "" }
                ]
            }],
        }));
    },
    updateQuestion: (index, text) => {
        set((state) => {
            const updatedQuestions = [...state.questions];
            updatedQuestions[index].questionText = text;
            return { questions: updatedQuestions };
        });
    },
    addOptionToQuestion: (index, option) => {
        set((state) => {
            const updatedQuestions = [...state.questions];
            const optionId = uuidv4();
            updatedQuestions[index].options.push({ id: optionId, text: option });
            return { questions: updatedQuestions };
        });
    },
    setQuizTitle: (title) => set({ quizTitle: title }),
}));

export default useQuizStore;
