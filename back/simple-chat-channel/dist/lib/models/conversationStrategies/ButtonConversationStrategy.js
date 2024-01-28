"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ButtonConversationStrategy = void 0;
const IConversationStrategy_1 = require("./IConversationStrategy");
const random_1 = require("../random");
class ButtonConversationStrategy extends IConversationStrategy_1.IConversationStrategy {
    constructor(input) {
        super(input);
        if (!input.buttons) {
            throw new Error("ButtonConversationStrategy instantiated when no buttons are available.");
        }
        this.selectedButton = random_1.randomIn(input.buttons);
    }
    generateAIResponse() {
        return `Selected button: ${this.selectedButton.label} (${this.selectedButton.value})`;
    }
    generateWebhookBody() {
        return {
            type: "button",
            employeeId: this.input.employeeId,
            value: this.selectedButton.value,
            context: this.input.webhookContext,
        };
    }
}
exports.ButtonConversationStrategy = ButtonConversationStrategy;
