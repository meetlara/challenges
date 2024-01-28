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
exports.ConversationalAi = void 0;
const conversationStrategyFactory_1 = require("./conversationStrategies/conversationStrategyFactory");
const MessageSender_1 = require("./MessageSender");
class ConversationalAi {
    constructor() {
        this.messageRenderer = new MessageSender_1.MessageRenderer();
    }
    sendMessageAsLaraAI(input) {
        return __awaiter(this, void 0, void 0, function* () {
            this.messageRenderer.render("Lara AI", input.body, input.buttons);
            const conversationalStrategy = conversationStrategyFactory_1.conversationStrategyFactory(input);
            yield conversationalStrategy.process();
        });
    }
}
exports.ConversationalAi = ConversationalAi;
