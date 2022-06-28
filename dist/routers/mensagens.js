"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const mensagens_1 = __importDefault(require("../controllers/mensagens"));
class MensagensRouters {
    init() {
        const router = (0, express_1.Router)();
        const controller = new mensagens_1.default;
        router.get('/mensagens/:user_id', controller.index);
        router.get('/mensagens', controller.show);
        router.post('/mensagens/:userId', controller.store);
        router.put('/mensagens/:id', controller.update);
        router.delete('/mensagens/:id', controller.delete);
        return router;
    }
}
exports.default = MensagensRouters;
