import { MensagensEntity, UserEntity } from '../entities';
import { MensagensDTO } from '../../dto';

export class MensagensRepository {
    async find(user_id: string) {
        const mensagens = await MensagensEntity.find();

        return mensagens;
    }

    async findOne(user_id: string) {
        const mensagens = await MensagensEntity.findOne(user_id);
        
        return mensagens;
    }

    async create(mensagensDTO: MensagensDTO) {
        const mensagens = await new MensagensEntity( mensagensDTO.descrição, mensagensDTO.detalhes, mensagensDTO.user_id );
        mensagens.save();

        return mensagens;
    }

    async update(mensagensDTO: MensagensDTO) {
        const mensagens = await MensagensEntity.findOne(mensagensDTO.id);

        if (mensagens) {
            mensagens.descrição = mensagensDTO.descrição;
            mensagens.detalhes = mensagensDTO.detalhes;
            await mensagens.save();
        }

        return mensagens;
    }
    async delete(mensagensID: string) {
        await MensagensEntity.delete(mensagensID);
    }
}