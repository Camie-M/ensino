import { PrismaClient } from '@prisma/client';
import { UserEntity } from '../entities/UserEntity';

const prisma = new PrismaClient();

export class UserRepository {
  async findAll(): Promise<UserEntity[]> {
    const users = await prisma.user.findMany(); // Pega todos os usuários do banco de dados
    const userEntities: UserEntity[] = [];

    // Itera sobre todos os usuários e converte para UserEntity
    for (const user of users) {
      userEntities.push(this.toUserEntity(user));
    }

    return userEntities;
  }

  async findById(id: string): Promise<UserEntity | null> {
    const user = await prisma.user.findUnique({ where: { id } });
    if (!user) return null;
    return this.toUserEntity(user);
  }

  async create(username: string, role: string): Promise<UserEntity> {
    const user = await prisma.user.create({
      data: {
        username,
        role,
      },
    });
    return this.toUserEntity(user);
  }

  async update(id: string, updatedFields: { username: string; role: string }): Promise<UserEntity | null> {
    const user = await prisma.user.update({
      where: { id },
      data: updatedFields,
    });
    if (!user) return null;
    return this.toUserEntity(user);
  }

  async delete(id: string): Promise<UserEntity | null> {
    const user = await prisma.user.delete({ where: { id } });
    if (!user) return null;
    return this.toUserEntity(user);
  }

  // Converte os dados do Prisma para uma entidade UserEntity
  private toUserEntity(user: { id: string; username: string; role: string }): UserEntity {
    return new UserEntity(user.username, user.role, user.id);
  }
}
