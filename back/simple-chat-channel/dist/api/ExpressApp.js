"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpressApp = void 0;
const utilsRoutes_1 = require("../api/routes/utilsRoutes");
const express_1 = require("@alanszp/express");
const express_2 = __importDefault(require("express"));
const messageRouter_1 = require("./routes/messageRouter");
class ExpressApp {
    constructor() {
        this.express = express_2.default();
        this.addRootMiddleware();
        this.mountRoutes();
        this.errorHandling();
    }
    addRootMiddleware() {
        this.express.use(express_1.jsonBodyParser());
    }
    mountRoutes() {
        this.express.use("/utils", utilsRoutes_1.utilsRouter);
        this.express.use("/v1/message", messageRouter_1.messageRouter);
    }
    errorHandling() {
        this.express.use(express_1.returnNotFound);
        this.express.use(express_1.returnInternalServerError);
    }
    getExpress() {
        return this.express;
    }
}
exports.ExpressApp = ExpressApp;
