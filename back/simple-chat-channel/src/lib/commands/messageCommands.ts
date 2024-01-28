import { PostMessageInput } from "../models/inputs/PostMessageInput";
import { ConversationalAi } from "../models/ConversationalAi";

export async function postMessageCommand(input: PostMessageInput): Promise<void> {
  await input.validate();
  const sender = new ConversationalAi();

  await sender.sendMessageAsLaraAI(input);
}
