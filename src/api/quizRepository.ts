import { quizUrls } from "constants/apiUrls/quiz";
import { get } from "./client";

export const quizRepository = {
  getAllQuizzes: async () => {
    return await get(quizUrls.ALL_QUIZZES);
  },
  createQuiz: async () => {
    return await get(quizUrls.ALL_QUIZZES);
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

