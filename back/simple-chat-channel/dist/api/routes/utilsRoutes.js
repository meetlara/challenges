"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.utilsRouter = void 0;
const express_1 = require("express");
exports.utilsRouter = express_1.Router();
exports.utilsRouter.get("/health", (_req, res, _next) => {
    res.status(200).send();
});
