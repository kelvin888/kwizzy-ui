import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    // You may want to clean this up later by importing these.
    baseUrl: process.env.CYPRESS_BASE_URL || "http://localhost:3000",
  },
});
