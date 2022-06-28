import { Router } from "express";
import MensagensController from "../controllers/mensagens";
import UserController from "../controllers/user";

export default class UserRouters {
    init() {
        const router = Router();
        const controller = new UserController;
        const msgController = new MensagensController;

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