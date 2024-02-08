import { authUrls } from "constants/apiUrls/auth";
import { get, post } from "./client";
import {  AuthResponseData, LoginDataType } from "types/auth";

export const authRepository = {
  registerUser: async () => {
    return await get(authUrls.REGISTER_USER);
  },
  authenticateUser: async (data: LoginDataType): Promise<AuthResponseData> => {
    return await post(authUrls.AUTHENTICATE_USER, data);
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

