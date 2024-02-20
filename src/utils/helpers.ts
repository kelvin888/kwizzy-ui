import config from "config";

export function isProductionMode(): boolean {
  return config.MODE === "production";
}

export function isDevelopmentMode(): boolean {
  return config.MODE === "development";
}
