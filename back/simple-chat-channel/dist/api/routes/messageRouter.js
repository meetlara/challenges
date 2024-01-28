"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.messageRouter = void 0;
const messageController_1 = require("../../api/controllers/messageController");
const express_1 = require("express");
exports.messageRouter = express_1.Router({ mergeParams: true });
exports.messageRouter.post("/", messageController_1.postMessageController);
