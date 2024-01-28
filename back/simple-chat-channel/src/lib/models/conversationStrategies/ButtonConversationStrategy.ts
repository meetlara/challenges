import { ButtonSelectedWebhookMessage } from "../clients/WebhookClient";
import { IConversationStrategy } from "./IConversationStrategy";
import { randomIn } from "../random";
import { PostMessageInput } from "../inputs/PostMessageInput";
import { Button } from "../validators/PostMessageBodyValidator";

export class ButtonConversationStrategy extends IConversationStrategy {
  private selectedButton: Button;

  constructor(input: PostMessageInput) {
    super(input);

    if (!input.buttons) {
      throw new Error("ButtonConversationStrategy instantiated when no buttons are available.");
    }

    this.selectedButton = randomIn(input.buttons);
  }

  generateAIResponse(): string {
    return `Selected button: ${this.selectedButton.label} (${this.selectedButton.value})`;
  }

  generateWebhookBody(): ButtonSelectedWebhookMessage {
    return {
      type: "button",
      employeeId: this.input.employeeId,
      value: this.selectedButton.value,
      context: this.input.webhookContext,
    };
  }
}
