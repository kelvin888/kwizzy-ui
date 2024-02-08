import { authRepository } from "api/authRepository";
import { LoginDataType } from "types/auth";

const authService = {
    login: async (data: LoginDataType) => {
        return await authRepository.authenticateUser(data);
    },
    register: async () => {
        return await authRepository.registerUser();
    },
    resetPassword: async () => {
        return await authRepository.resetPassword();
    },
    getAllUsers: async () => {
        return await authRepository.resetPassword();
    },
    getUserById: async () => {
        return await authRepository.resetPassword();
    },
    updateUser: async () => {
        return await authRepository.resetPassword();
    },
};

export default authService;
