export class WebhookError extends Error {
  constructor(val: never) {
    super(`Unreachable: ${JSON.stringify(val)}`);
  }
}
