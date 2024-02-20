import { quizUrls } from "constants/apiUrls/quiz";
import { get, post } from "./client";
import {
  QuizCreationData,
  QuizCreationResponseData,
  QuizResponseData,
} from "types/quiz";

export const quizRepository = {
  getAllQuizzes: async (): Promise<QuizResponseData> => {
    return await get(quizUrls.ALL_QUIZZES);
  },
  createQuiz: async (
    data: QuizCreationData,
  ): Promise<QuizCreationResponseData> => {
    return await post(quizUrls.CREATE_QUIZ, data);
  },
  getQuizById: async () => {
    return await get(quizUrls.ALL_QUIZZES);
  },
  updateQuiz: async () => {
    return await get(quizUrls.ALL_QUIZZES);
  },
  deleteQuiz: async () => {
    return await get(quizUrls.ALL_QUIZZES);
  },
  submitQuiz: async () => {
    return await get(quizUrls.ALL_QUIZZES);
  },
};
