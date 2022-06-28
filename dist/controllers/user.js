"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const services_1 = require("../services");
class UserController {
    async index(request, response) {
        const service = new services_1.UserService();
        const user = await service.find();
        return response.json(user.map(user => {
            return {
                id: user.id,
                usuario: user.usuario,
                senha: user.senha
            };
        }));
    }
    async show(request, response) {
        const { id } = request.params;
        const service = new services_1.UserService();
        const user = await service.findOne(id);
        return response.json({
            usuario: user
        });
    }
    async store(request, response) {
        const { id, usuario, senha } = request.body;
        const service = new services_1.UserService();
        const user = await service.create({
            id: id,
            usuario: usuario,
            senha: senha
        });
        return response.json(user);
    }
    async update(request, response) {
        const { id } = request.params;
        const { usuario, senha } = request.body;
        const service = new services_1.UserService();
        const user = await service.update({
            id: id,
            usuario: usuario,
            senha: senha
        });
        return response.json(user);
    }
    async delete(request, response) {
        const { id } = request.params;
        const service = new services_1.UserService();
        await service.delete(id);
        return response.sendStatus(204);
    }
}
exports.default = UserController;
;
