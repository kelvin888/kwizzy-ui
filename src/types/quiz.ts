type Option = {
    id: string;
    text: string;
};

type Question = {
    id: string;
    text: string;
    options: Option[];
};

type Quiz = {
    id: string;
    title: string;
    questions: Question[];
};
