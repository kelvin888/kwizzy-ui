import { quizRepository } from "api/quizRepository";

const quizService = {
    getAllQuizes: async () => {
        return await quizRepository.getAllQuizzes();
    },
    createQuiz: async () => {
        return await quizRepository.getAllQuizzes();
    },
};

export default quizService;
