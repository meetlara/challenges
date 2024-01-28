import { conversationStrategyFactory } from "./conversationStrategies/conversationStrategyFactory";
import { PostMessageInput } from "./inputs/PostMessageInput";
import { MessageRenderer } from "./MessageSender";

export class ConversationalAi {
  private messageRenderer: MessageRenderer;

  constructor() {
    this.messageRenderer = new MessageRenderer();
  }

  public async sendMessageAsLaraAI(input: PostMessageInput): Promise<void> {
    this.messageRenderer.render("Lara AI", input.body, input.buttons);
    const conversationalStrategy = conversationStrategyFactory(input);
    await conversationalStrategy.process();
  }
}
