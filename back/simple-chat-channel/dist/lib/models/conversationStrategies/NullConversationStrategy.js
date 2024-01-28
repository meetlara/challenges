"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NullConversationStrategy = void 0;
const IConversationStrategy_1 = require("./IConversationStrategy");
class NullConversationStrategy extends IConversationStrategy_1.IConversationStrategy {
    shouldGenerateAIResponse() {
        return false;
    }
    generateAIResponse() {
        throw new Error("NullConversationalStrategy should never call generateAIResponse");
    }
    generateWebhookBody() {
        throw new Error("NullConversationalStrategy should never call generateWebhookBody");
    }
}
exports.NullConversationStrategy = NullConversationStrategy;
