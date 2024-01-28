"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebhookError = void 0;
class WebhookError extends Error {
    constructor(val) {
        super(`Unreachable: ${JSON.stringify(val)}`);
    }
}
exports.WebhookError = WebhookError;
