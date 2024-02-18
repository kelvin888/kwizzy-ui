export interface LoginDataType {
  email: string;
  password: string;
}

export interface AuthUserData {
  accessToken: string;
  refreshToken: string;
}

export interface AuthResponseData {
  data: AuthUserData;
}
