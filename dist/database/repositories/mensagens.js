"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MensagensRepository = void 0;
const entities_1 = require("../entities");
class MensagensRepository {
    async find(user_id) {
        const mensagens = await entities_1.MensagensEntity.find();
        return mensagens;
    }
    async findOne(user_id) {
        const mensagens = await entities_1.MensagensEntity.findOne(user_id);
        return mensagens;
    }
    async create(mensagensDTO) {
        const mensagens = await new entities_1.MensagensEntity(mensagensDTO.descrição, mensagensDTO.detalhes, mensagensDTO.user_id);
        mensagens.save();
        return mensagens;
    }
    async update(mensagensDTO) {
        const mensagens = await entities_1.MensagensEntity.findOne(mensagensDTO.id);
        if (mensagens) {
            mensagens.descrição = mensagensDTO.descrição;
            mensagens.detalhes = mensagensDTO.detalhes;
            await mensagens.save();
        }
        return mensagens;
    }
    async delete(mensagensID) {
        await entities_1.MensagensEntity.delete(mensagensID);
    }
}
exports.MensagensRepository = MensagensRepository;
