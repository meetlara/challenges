"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.conversationStrategyFactory = void 0;
const AskTextConversationStrategy_1 = require("./AskTextConversationStrategy");
const ButtonConversationStrategy_1 = require("./ButtonConversationStrategy");
const NullConversationStrategy_1 = require("./NullConversationStrategy");
function conversationStrategyFactory(input) {
    if (input.askText) {
        return new AskTextConversationStrategy_1.AskTextConversationStrategy(input);
    }
    if (input.buttons) {
        return new ButtonConversationStrategy_1.ButtonConversationStrategy(input);
    }
    return new NullConversationStrategy_1.NullConversationStrategy(input);
}
exports.conversationStrategyFactory = conversationStrategyFactory;
