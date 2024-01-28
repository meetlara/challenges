import { format } from "date-fns";
import { range } from "lodash";
import { Button } from "./validators/PostMessageBodyValidator";

export class MessageRenderer {
  public render(userName: string, message: string, buttons?: Button[]): void {
    const stringDate = format(new Date(), "dd/MM HH:mm:ss");

    const countBars = 60 - userName.length;
    const bars = range(countBars)
      .map(() => "-")
      .join("");

    console.log(`\n-- [${stringDate}] ${userName} ${bars}`);
    console.log(message);

    if (buttons) {
      const msg = buttons.map((b) => `  ⦁ ${b.label} (${b.value})`).join("\n");
      console.log(`\n${msg}`);
    }
  }
}
