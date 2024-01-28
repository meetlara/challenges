"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IConversationStrategy = void 0;
const axios_node_1 = require("@alanszp/axios-node");
const WebhookClient_1 = require("../clients/WebhookClient");
const MessageSender_1 = require("../MessageSender");
class IConversationStrategy {
    constructor(input) {
        this.input = input;
    }
    shouldGenerateAIResponse() {
        return true;
    }
    sendWebhook() {
        return __awaiter(this, void 0, void 0, function* () {
            const client = new WebhookClient_1.WebhookClient();
            try {
                yield client.sendWebhook(this.input.webhookUrl, this.generateWebhookBody());
            }
            catch (error) {
                if (error instanceof axios_node_1.Non200ResponseError || error instanceof axios_node_1.NetworkRequestError) {
                    console.log(`\n*******************`);
                    console.log(`** WEBHOOK ERROR **`);
                    console.log(`*******************`);
                    console.log(`\nTried to send a webhook to:`);
                    console.log(`URL: ${this.input.webhookUrl}`);
                    console.log("CONTEXT:", this.input.webhookContext);
                    console.log("BODY:", error.request.data);
                    if (error instanceof axios_node_1.Non200ResponseError) {
                        console.log(`\nGot response non 200 response:`);
                        console.log(`CODE: ${error.response.status}`);
                        console.log(`BODY:`, error.response.data);
                    }
                    if (error instanceof axios_node_1.NetworkRequestError) {
                        console.log(`\nThere was a network problem:`);
                        console.log(`ERROR: ${error.getAxiosError().message}`);
                    }
                    console.log(`\n**************************`);
                    console.log(`** END OF WEBHOOK ERROR **`);
                    console.log(`**************************`);
                }
            }
        });
    }
    process() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.shouldGenerateAIResponse())
                return;
            const messageRenderer = new MessageSender_1.MessageRenderer();
            const msg = this.generateAIResponse();
            messageRenderer.render(`EMPLOYEE ${this.input.employeeId}`, msg);
            yield this.sendWebhook();
        });
    }
}
exports.IConversationStrategy = IConversationStrategy;
