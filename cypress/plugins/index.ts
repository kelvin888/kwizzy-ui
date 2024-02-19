// plugins/index.ts

// Load environment variables from .env.test file
import { config } from "dotenv";

const environment =
  process.env.REACT_APP_MODE === "development" ? ".env.local" : ".env.test";
console.log("environment", process.env);

config({ path: environment });

// Cypress plugin function
const plugin: Cypress.PluginConfig = (on, config) => {
  // Set baseUrl, username, and password from environment variables
  config.baseUrl = process.env.CYPRESS_BASE_URL || "";
  config.env.username = process.env.CYPRESS_USERNAME || "";
  config.env.password = process.env.CYPRESS_PASSWORD || "";

  // Return the modified config object
  return config;
};

// Export the plugin function
export default plugin;
