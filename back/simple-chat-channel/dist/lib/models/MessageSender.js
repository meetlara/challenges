"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageRenderer = void 0;
const date_fns_1 = require("date-fns");
const lodash_1 = require("lodash");
class MessageRenderer {
    render(userName, message, buttons) {
        const stringDate = date_fns_1.format(new Date(), "dd/MM HH:mm:ss");
        const countBars = 60 - userName.length;
        const bars = lodash_1.range(countBars)
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
exports.MessageRenderer = MessageRenderer;
