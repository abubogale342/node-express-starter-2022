import packageJson from "../package.json";
import dotenv from "dotenv";

// Initiate dotenv to interact with .env file values
dotenv.config();

/**
 * Pattern for config is:
 * key: process.env['KEY'] ?? default
 */
console.log(process.env.PORT);

const config = {
  version: packageJson.version,
  name: packageJson.name,
  description: packageJson.description,

  nodeEnv: process.env["NODE_ENV"] ?? "development",
  port: process.env["PORT"] ?? 3000,

  clientOrigins: {
    test: process.env["DEV_ORIGIN"] ?? "*",
    development: process.env["DEV_ORIGIN"] ?? "*",
    production: process.env["PROD_ORIGIN"] ?? "none",
  },
};

export default config;
