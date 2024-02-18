import { quizRepository } from "api/quizRepository";
import { QuizCreationData } from "types/quiz";

const quizService = {
  getAllQuizes: async () => {
    return await quizRepository.getAllQuizzes();
  },
  createQuiz: async (data: QuizCreationData) => {
    return await quizRepository.createQuiz(data);
  },
};

export default quizService;
