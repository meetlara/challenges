import { PostMessageInput } from "../inputs/PostMessageInput";
import { AskTextConversationStrategy } from "./AskTextConversationStrategy";
import { ButtonConversationStrategy } from "./ButtonConversationStrategy";
import { NullConversationStrategy } from "./NullConversationStrategy";
import { IConversationStrategy } from "./IConversationStrategy";

export function conversationStrategyFactory(input: PostMessageInput): IConversationStrategy {
  if (input.askText) {
    return new AskTextConversationStrategy(input);
  }

  if (input.buttons) {
    return new ButtonConversationStrategy(input);
  }

  return new NullConversationStrategy(input);
}
