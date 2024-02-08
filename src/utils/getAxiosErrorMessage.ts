import { AxiosError } from "axios"

export function handleError(error: AxiosError): string {
  if (
    error.response &&
    "data" in error.response &&
    typeof error.response.data === "object"
  ) {
    const errorMessage = (error.response.data as { message: string }).message
    return errorMessage
  } else {
    return "An unknown error occurred: " + error
  }
}
