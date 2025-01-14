import { UserResource } from '../resources/UserResource';
import { UserRepository } from '../repositories/UserRepository';
import { UserMapper } from '../mappers/UserMapper';
import { TokenUtils } from '../utils/LoginUtils';
import { User } from '../models/User';
const crypto = require('crypto');

const userRepository = new UserRepository();
const allowedRoles = ["admin"]
export class UserService {

    public async create(username: string, role: string, password:string, token:string): Promise<UserResource> {
        try {
            TokenUtils.validateUser(token, allowedRoles);
            await this.validateUsername(username);
            const hashPassword = TokenUtils.hashGenerator(password)
            const createdUser = await userRepository.create(username, role, hashPassword)
            return UserMapper.mapToResource(createdUser)
        } catch (error) {
            throw new Error(`Não foi possível criar o usuário: ${error}`);
        }
    }

    async findAll(): Promise<UserResource[]> {
        try {
            const users = await userRepository.findAll();
            if (users === null || users.length == 0) throw new Error("Não existe usuarios na tabela");
            const usersArray = users.map(user => UserMapper.mapToResource(user));
            return usersArray
        } catch (error) {
            throw new Error(`Não foi possível encontrar os usuários: ${error}`);
        }
    }

    async findById(id: string, token:string): Promise<UserResource> {
        let user;
        if(id == "self"){
            user = await this.findUserByToken(token)
        }else{
            TokenUtils.validateUser(token, allowedRoles);
            user = await this.findUserById(id)
        }
        return UserMapper.mapToResource(user)
    }

    
    
    async findByUsername(username: string): Promise<UserResource> {
        const user = await this.findUserByUsername(username)
        return UserMapper.mapToResource(user)
    }
    
    async findEntityByUsername(username: string): Promise<User> {
        return await this.findUserByUsername(username)
    }
    

    async update(id: string, updatedFields: { username: string; role: string }): Promise<UserResource | null> {
        try {
            const user = await this.findUserById(id);
            await this.validateUsername(updatedFields.username)
            const updatedUser = await userRepository.update(user, updatedFields);
            return UserMapper.mapToResource(updatedUser);
        } catch (error) {
            throw new Error(`Não foi possível atualizar o usuário: ${error}`);
        }
    }

    async delete(id: string, token:string): Promise<void> {
        try {
            TokenUtils.validateUser(token, allowedRoles);
            const user = await this.findUserById(id);
            userRepository.delete(user)
        } catch (error) {
            throw new Error(`Não foi possível deletar o usuário: ${error}`);
        }
    }

    private async findUserByUsername(username: string) {
        const user = await userRepository.findByUsername(username);
        if (!user) throw new Error(`Usuário não encontrado por username: ${username}`);
        return user;
    }

    private async findUserById(id: string) {
        const user = await userRepository.findById(id);
        if (!user) throw new Error(`Usuário não encontrado por ID: ${id}`);
        return user;
    }

    private async validateUsername(username: string) {
        const user = await userRepository.findByUsername(username);
        if (user) throw new Error("Usuario com este username já existe");
    }
    private async findUserByToken(token: string) {
        const decoded = TokenUtils.decodeToken(token);
        return await this.findUserById(decoded.id)

    }
}
