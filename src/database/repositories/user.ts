import { UserEntity } from '../entities';
import { UserDTO } from '../../dto';

export class UserRepository {
    async find() {
        const user = await UserEntity.find();

        return user;
    }

    async findOne(id: string) {
        const user = await UserEntity.findOne(id);
        
        return user;
    }

    async create(UserDTO: UserDTO) {
        const user = await new UserEntity( UserDTO.usuario, UserDTO.senha);
        user.save();

        return user;
    }

    async update(UserDTO: UserDTO) {
        const user = await UserEntity.findOne(UserDTO.id);

        if (user) {
            user.usuario = UserDTO.usuario;
            user.senha = UserDTO.senha;
            await user.save();
        }

        return user;
    }

    async delete(userID: string) {
        await UserEntity.delete(userID);
    }
}