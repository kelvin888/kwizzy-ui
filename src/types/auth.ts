export type LoginDataType = {
    email: string;
    password: string;
};

export type AuthUserData = {
    accessToken: string,
    refreshToken: string
}

export interface AuthResponseData {
    data: AuthUserData
}