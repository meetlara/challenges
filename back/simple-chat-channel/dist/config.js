"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isDevelopment = exports.config = void 0;
const convict_1 = __importDefault(require("convict"));
const dotenv_1 = require("dotenv");
dotenv_1.config({ path: `.env.${process.env.NODE_ENV || "development"}` });
exports.config = convict_1.default({
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
exports.config.validate({ allowed: "strict" });
if (!exports.config.get("configLoaded")) {
    throw new Error(".env file was not loaded or misconfigured");
}
const isDevelopment = () => exports.config.get("env") === "development";
exports.isDevelopment = isDevelopment;
