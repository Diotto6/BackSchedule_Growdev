"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const mensagens_1 = __importDefault(require("../controllers/mensagens"));
const user_1 = __importDefault(require("../controllers/user"));
class UserRouters {
    init() {
        const router = (0, express_1.Router)();
        const controller = new user_1.default;
        const msgController = new mensagens_1.default;
        router.get('/user', controller.index);
        router.get('/user/:id', controller.show);
        router.post('/user', controller.store);
        router.put('/user/:id', controller.update);
        router.delete('/user/:id', controller.delete);
        router.get('/mensagens/:user_id', msgController.index);
        router.get('/mensagens', msgController.show);
        router.post('/mensagens/:userId', msgController.store);
        router.put('/mensagens/:id', msgController.update);
        router.delete('/mensagens/:id', msgController.delete);
        return router;
    }
}
exports.default = UserRouters;
