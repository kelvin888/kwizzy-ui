import { authUrls } from "constants/apiUrls/auth";
import { get } from "./client";

export const authRepository = {
  registerUser: async () => {
    return await get(authUrls.REGISTER_USER);
  },
  authenticateUser: async () => {
    return await get(authUrls.AUTHENTICATE_USER);
  },
  resetPassword: async () => {
    return await get(authUrls.RESET_PASSWORD);
  },
  getAllUsers: async () => {
    return await get(authUrls.GET_ALL_USERS);
  },
  getUserById: async () => {
    return await get(authUrls.GET_USER_BY_ID);
  },
  updateUser: async () => {
    return await get(authUrls.UPDATE_USER);
  },
};

