"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MensagensService = void 0;
const repositories_1 = require("../database/repositories");
class MensagensService {
    async find(user_id) {
        const repository = new repositories_1.MensagensRepository();
        const mensagens = await repository.find(user_id);
        return mensagens;
    }
    async findOne(user_id) {
        const repository = new repositories_1.MensagensRepository();
        const mensagens = await repository.findOne(user_id);
        return mensagens;
    }
    async create(mensagensDTO) {
        const repository = new repositories_1.MensagensRepository();
        const mensagens = await repository.create(mensagensDTO);
        return mensagens;
    }
    async update(mensagensDTO) {
        const repository = new repositories_1.MensagensRepository();
        const mensagens = await repository.update(mensagensDTO);
        return mensagens;
    }
    async delete(mensagens_id) {
        const repository = new repositories_1.MensagensRepository();
        await repository.delete(mensagens_id);
    }
}
exports.MensagensService = MensagensService;
