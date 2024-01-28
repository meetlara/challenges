import { postMessageController } from "@/api/controllers/messageController";
import { Router } from "express";

export const messageRouter = Router({ mergeParams: true });

messageRouter.post("/", postMessageController);
