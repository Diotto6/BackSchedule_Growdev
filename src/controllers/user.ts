import { Request, Response } from 'express';
import { UserService } from '../services';


export default class UserController {
    
    async index(request: Request, response: Response) {
        const service = new UserService();
        const user = await service.find();

        return response.json(user.map(user => {
            return {
                id:user.id,
                usuario: user.usuario,
                senha: user.senha
            }
        }));
    }

    async show(request: Request, response: Response) {
        const { id } = request.params;
        const service = new UserService();
        const user = await service.findOne(id);

        return response.json({
            usuario: user
        });
    }

    async store(request: Request, response: Response) {
        const { id, usuario, senha } = request.body;
        const service = new UserService();
        const user = await service.create({
            id: id,
            usuario: usuario,
            senha: senha
        });

        return response.json(user);
    }

    async update(request: Request, response: Response) {
        const { id } = request.params;
        const { usuario, senha } = request.body;
        const service = new UserService();
        const user = await service.update({
            id: id,
            usuario: usuario,
            senha: senha
        });

        return response.json(user);
    }

    async delete(request: Request, response: Response) {
        const { id } = request.params;
        const service = new UserService();
        await service.delete(id);

        return response.sendStatus(204);
    }
};