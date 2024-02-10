import { QueryClient } from '@tanstack/react-query';
import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import env from 'config';


const config: AxiosRequestConfig = {
  baseURL: env.QUIZ_SERVICE_ENDPOINT,
};

const client = axios.create(config);

type ApiClientRead = <T>(
  url: string,
  config?: AxiosRequestConfig,
) => Promise<T>;

type ApiClientWrite = <T>(
  url: string,
  data?: any,
  config?: AxiosRequestConfig,
) => Promise<T>;

export type ApiClientErrorParams<T = any> = {
  message?: string | undefined;
  name?: string | undefined;
  stack?: string | undefined;
  userMessage?: string | undefined;
  axiosError?: AxiosError<T>;
  response?: T;
};

export class ApiClientError<T = any> extends Error {
  userMessage: string | undefined;
  axiosError?: AxiosError<T>;
  response?: T | undefined;

  constructor(params?: ApiClientErrorParams<T>) {
    super();
    this.message = params?.message ?? '';
    this.name = params?.name ?? 'ApiClientError';
    this.stack = params?.stack;
    this.userMessage = params?.userMessage;
    this.axiosError = params?.axiosError;
    this.response = params?.response;
  }
}

export const get: ApiClientRead = client.get;

export const httpDelete: ApiClientRead = client.delete;

export const post: ApiClientWrite = client.post;

export const put: ApiClientWrite = client.put;

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
    mutations: {
      retry: false,
    },
  },
});