const config = {
  QUIZ_SERVICE_ENDPOINT: process.env.NEXT_PUBLIC_QUIZ_SERVICE_ENDPOINT,
  MODE: process.env.REACT_APP_MODE as "development" | "production",
};

export default config;
