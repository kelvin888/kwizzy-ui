type Option = {
    id: string;
    text: string;
};

type Quiz = {
    id: string;
    title: string;
    questions: Question[];
};

interface Question {
    id: string
    questionText: string;
    options: Option[];
}

interface QuizCreationData {
    name: string;
    questions: Question[];
}