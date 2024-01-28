import { Router } from "express";

export const utilsRouter = Router();

utilsRouter.get("/health", (_req, res, _next) => {
  res.status(200).send();
});
