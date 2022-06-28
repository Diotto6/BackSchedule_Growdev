"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const entities_1 = require("../entities");
class UserRepository {
    async find() {
        const user = await entities_1.UserEntity.find();
        return user;
    }
    async findOne(id) {
        const user = await entities_1.UserEntity.findOne(id);
        return user;
    }
    async create(UserDTO) {
        const user = await new entities_1.UserEntity(UserDTO.usuario, UserDTO.senha);
        user.save();
        return user;
    }
    async update(UserDTO) {
        const user = await entities_1.UserEntity.findOne(UserDTO.id);
        if (user) {
            user.usuario = UserDTO.usuario;
            user.senha = UserDTO.senha;
            await user.save();
        }
        return user;
    }
    async delete(userID) {
        await entities_1.UserEntity.delete(userID);
    }
}
exports.UserRepository = UserRepository;
