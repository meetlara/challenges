import { ButtonSelectedWebhookMessage } from "../clients/WebhookClient";
import { IConversationStrategy } from "./IConversationStrategy";

export class NullConversationStrategy extends IConversationStrategy {
  shouldGenerateAIResponse(): boolean {
    return false;
  }

  generateAIResponse(): string {
    throw new Error("NullConversationalStrategy should never call generateAIResponse");
  }

  generateWebhookBody(): ButtonSelectedWebhookMessage {
    throw new Error("NullConversationalStrategy should never call generateWebhookBody");
  }
}
