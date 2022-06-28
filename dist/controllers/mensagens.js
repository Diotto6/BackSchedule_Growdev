"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const services_1 = require("../services");
class MensagensController {
    async index(request, response) {
        const { user_id } = request.params;
        const service = new services_1.MensagensService();
        const mensagens = await service.find(user_id);
        return response.json(mensagens.map(mensagens => {
            return {
                id: mensagens.id,
                descrição: mensagens.descrição,
                detalhes: mensagens.detalhes,
                user_id: mensagens.user_id,
            };
        }));
    }
    async show(request, response) {
        const { user_id } = request.params;
        const service = new services_1.MensagensService();
        const mensagens = await service.findOne(user_id);
        return response.json({
            mensagens: mensagens
        });
    }
    async store(request, response) {
        const { userId } = request.params;
        const { descrição, detalhes } = request.body;
        const service = new services_1.MensagensService();
        const dto = {
            descrição,
            detalhes,
            user_id: userId
        };
        const mensagens = await service.create(dto);
        return response.json(mensagens);
    }
    async update(request, response) {
        const { id } = request.params;
        const { descrição, detalhes, user_id } = request.body;
        const mensagensService = new services_1.MensagensService();
        const mensagens = await mensagensService.update({
            id,
            descrição,
            detalhes,
            user_id
        });
        return response.json(mensagens);
    }
    async delete(request, response) {
        const { id } = request.params;
        const mensagensService = new services_1.MensagensService();
        await mensagensService.delete(id);
        return response.sendStatus(204);
    }
}
exports.default = MensagensController;
;
