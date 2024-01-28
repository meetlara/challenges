import { axios } from "@/lib/models/axios";

export interface TextWebhookMessage {
  type: "text";
  employeeId: string;
  text: string;
  context: Record<string, unknown>;
}

export interface ButtonSelectedWebhookMessage {
  type: "button";
  employeeId: string;
  value: string;
  context: Record<string, unknown>;
}

export type WebhookMessage = TextWebhookMessage | ButtonSelectedWebhookMessage;

export class WebhookClient {
  public async sendWebhook(url: string, message: WebhookMessage): Promise<void> {
    await axios.post(url, {
      data: message,
      headers: {
        "User-Agent": "Lara AI Simple Channel",
      },
    });
  }
}
