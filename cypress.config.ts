import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require("./cypress/plugins/index.ts").default(on, config);
    },
    baseUrl: "http://localhost:3000",
  },
});
