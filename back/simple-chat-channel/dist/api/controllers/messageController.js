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
exports.postMessageController = void 0;
const messageCommands_1 = require("../../lib/commands/messageCommands");
const express_1 = require("@alanszp/express");
const PostMessageInput_1 = require("../../lib/models/inputs/PostMessageInput");
const errors_1 = require("@alanszp/errors");
const validations_1 = require("@alanszp/validations");
function postMessageController(req, res, _next) {
    return __awaiter(this, void 0, void 0, function* () {
        const input = new PostMessageInput_1.PostMessageInput(req.body);
        try {
            yield messageCommands_1.postMessageCommand(input);
            res.status(201).json();
        }
        catch (error) {
            if (error instanceof validations_1.ModelValidationError) {
                res.status(400).json(express_1.errorView(error));
                return;
            }
            console.log("ERROR DEL SERVIDOR", error);
            res.status(500).json(express_1.errorView(new errors_1.InternalServerError(error)));
        }
    });
}
exports.postMessageController = postMessageController;
