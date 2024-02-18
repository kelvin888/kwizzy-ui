import { type AxiosError } from "axios";

export function handleError(error: AxiosError): string {
  if (
    error.response != null &&
    "data" in error.response &&
    typeof error.response.data === "object"
  ) {
    const errorMessage = (error.response.data as { message: string }).message;
    return errorMessage;
  } else {
    const errorString = JSON.stringify(error, null, 2);
    return `An unknown error occurred: ${errorString}`;
  }
}
