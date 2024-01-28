import convict from "convict";
import { config as dotenvConfig } from "dotenv";

dotenvConfig({ path: `.env.${process.env.NODE_ENV || "development"}` });

export const config = convict({
  env: {
    default: "development",
    doc: "The application environment",
    format: ["production", "staging", "development", "test"],
    env: "NODE_ENV",
  },
  server: {
    port: {
      default: 8080,
      doc: "Port",
      format: "port",
      env: "API_PORT",
    },
  },
  configLoaded: {
    default: true,
    doc: "Safe check to see if config was loaded",
    format: Boolean,
    env: "CONFIG_FROM_ENV",
  },
});

config.validate({ allowed: "strict" });

if (!config.get("configLoaded")) {
  throw new Error(".env file was not loaded or misconfigured");
}

export const isDevelopment = (): boolean => config.get("env") === "development";
