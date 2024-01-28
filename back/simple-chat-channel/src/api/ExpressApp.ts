import { utilsRouter as utilRouter } from "@/api/routes/utilsRoutes";
import { jsonBodyParser, returnInternalServerError, returnNotFound } from "@alanszp/express";
import express, { Express } from "express";
import { messageRouter } from "./routes/messageRouter";

export class ExpressApp {
  private express: Express;

  constructor() {
    this.express = express();
    this.addRootMiddleware();
    this.mountRoutes();
    this.errorHandling();
  }

  private addRootMiddleware() {
    this.express.use(jsonBodyParser());
  }

  private mountRoutes() {
    this.express.use("/utils", utilRouter);
    this.express.use("/v1/message", messageRouter);
  }

  private errorHandling() {
    this.express.use(returnNotFound);
    this.express.use(returnInternalServerError);
  }

  public getExpress(): Express {
    return this.express;
  }
}
