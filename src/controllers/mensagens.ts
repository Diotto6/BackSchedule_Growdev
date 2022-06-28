import { Request, Response } from 'express';
import { MensagensService, UserService } from '../services';
import { MensagensDTO } from '../dto';

export default class MensagensController {
    async index(request: Request, response: Response) {
        const { user_id } = request.params;
        const service = new MensagensService();
        const mensagens = await service.find(user_id);

        return response.json(mensagens.map(mensagens => {
            return {
                id: mensagens.id,
               descrição: mensagens.descrição,
                detalhes: mensagens.detalhes,
                user_id: mensagens.user_id,
    
            }
        }));
    }

    async show(request: Request, response: Response) {
        const { user_id } = request.params;
        const service = new MensagensService();
        const mensagens = await service.findOne(user_id)
        
        return response.json({
            mensagens: mensagens
        });
    }

    async store(request: Request, response: Response) {
        const { userId } = request.params;
        const { descrição, detalhes} = request.body;
        const service = new MensagensService();
            const dto: MensagensDTO = {
                descrição,
                detalhes,
                user_id:userId
            };
    
    
            const mensagens = await service.create(dto);
    
            return response.json(mensagens);
    }

    async update(request: Request, response: Response) {
        const { id } = request.params
        const { descrição, detalhes, user_id } = request.body;
        const mensagensService = new MensagensService();
        const mensagens = await mensagensService.update({
            id,
            descrição,
            detalhes,
            user_id
        });

        return response.json(mensagens);
    }

    async delete(request: Request, response: Response) {
        const { id } = request.params;
        const mensagensService = new MensagensService();
        await mensagensService.delete(id);

        return response.sendStatus(204);
    }
};