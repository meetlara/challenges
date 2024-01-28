import { NetworkRequestError, Non200ResponseError } from "@alanszp/axios-node";
import { PostMessageInput } from "../inputs/PostMessageInput";
import { WebhookClient, WebhookMessage } from "../clients/WebhookClient";
import { MessageRenderer } from "../MessageSender";

export abstract class IConversationStrategy {
  protected input: PostMessageInput;

  constructor(input: PostMessageInput) {
    this.input = input;
  }

  protected abstract generateAIResponse(): string;

  protected abstract generateWebhookBody(): WebhookMessage;

  protected shouldGenerateAIResponse(): boolean {
    return true;
  }

  protected async sendWebhook(): Promise<void> {
    const client = new WebhookClient();
    try {
      await client.sendWebhook(this.input.webhookUrl, this.generateWebhookBody());
    } catch (error: unknown) {
      if (error instanceof Non200ResponseError || error instanceof NetworkRequestError) {
        console.log(`\n*******************`);
        console.log(`** WEBHOOK ERROR **`);
        console.log(`*******************`);
        console.log(`\nTried to send a webhook to:`);
        console.log(`URL: ${this.input.webhookUrl}`);
        console.log("CONTEXT:", this.input.webhookContext);
        console.log("BODY:", error.request.data);

        if (error instanceof Non200ResponseError) {
          console.log(`\nGot response non 200 response:`);
          console.log(`CODE: ${error.response.status}`);
          console.log(`BODY:`, error.response.data);
        }

        if (error instanceof NetworkRequestError) {
          console.log(`\nThere was a network problem:`);
          console.log(`ERROR: ${error.getAxiosError().message}`);
        }

        console.log(`\n**************************`);
        console.log(`** END OF WEBHOOK ERROR **`);
        console.log(`**************************`);
      }
    }
  }

  public async process(): Promise<void> {
    if (!this.shouldGenerateAIResponse()) return;

    const messageRenderer = new MessageRenderer();
    const msg = this.generateAIResponse();

    messageRenderer.render(`EMPLOYEE ${this.input.employeeId}`, msg);

    await this.sendWebhook();
  }
}
