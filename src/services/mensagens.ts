import  { MensagensRepository } from '../database/repositories';
import {  MensagensDTO } from '../dto';

export class MensagensService {
    async find(user_id: string) {
        const repository = new  MensagensRepository();
        const mensagens = await repository.find(user_id);

        return mensagens;
    }

    async findOne(user_id: string) {
        const repository = new  MensagensRepository();
        const mensagens = await repository.findOne(user_id);

        return mensagens;
    }

    async create(mensagensDTO:  MensagensDTO) {
        const repository = new  MensagensRepository();
        const mensagens = await repository.create(mensagensDTO);

        return mensagens;
    }

    async update(mensagensDTO:  MensagensDTO) {
        const repository = new  MensagensRepository();
        const mensagens = await repository.update(mensagensDTO);

        return mensagens;
    }

    async delete(mensagens_id: string) {
        const repository = new  MensagensRepository();
        await repository.delete(mensagens_id);
    }
}