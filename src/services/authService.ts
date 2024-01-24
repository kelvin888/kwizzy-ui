import { authRepository } from "api/authRepository";

const authService = {
    login: async () => {
        return await authRepository.authenticateUser();
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
