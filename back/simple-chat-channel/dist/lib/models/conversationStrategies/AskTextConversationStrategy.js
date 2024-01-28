"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AskTextConversationStrategy = void 0;
const IConversationStrategy_1 = require("./IConversationStrategy");
const random_1 = require("../random");
const PREDEFINED_RESPONSES = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
];
class AskTextConversationStrategy extends IConversationStrategy_1.IConversationStrategy {
    constructor(input) {
        super(input);
        this.predefinedResponse = random_1.randomIn(PREDEFINED_RESPONSES);
    }
    generateAIResponse() {
        return this.predefinedResponse;
    }
    generateWebhookBody() {
        return {
            type: "text",
            employeeId: this.input.employeeId,
            text: this.predefinedResponse,
            context: this.input.webhookContext,
        };
    }
}
exports.AskTextConversationStrategy = AskTextConversationStrategy;
