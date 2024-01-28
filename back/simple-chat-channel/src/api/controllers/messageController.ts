import { postMessageCommand } from "@/lib/commands/messageCommands";
import { NextFunction, Request, Response } from "express";
import { errorView } from "@alanszp/express";
import { PostMessageBody, PostMessageInput } from "@/lib/models/inputs/PostMessageInput";
import { InternalServerError } from "@alanszp/errors";
import { ModelValidationError } from "@alanszp/validations";

export async function postMessageController(
  req: Request<unknown, unknown, PostMessageBody>,
  res: Response,
  _next: NextFunction
): Promise<void> {
  const input = new PostMessageInput(req.body);

  try {
    await postMessageCommand(input);
    res.status(201).json();
  } catch (error: unknown) {
    if (error instanceof ModelValidationError) {
      res.status(400).json(errorView(error));
      return;
    }

    console.log("ERROR DEL SERVIDOR", error);
    res.status(500).json(errorView(new InternalServerError(error)));
  }
}
