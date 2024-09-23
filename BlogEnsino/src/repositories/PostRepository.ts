import { PrismaClient } from '@prisma/client';
import { PostEntity } from '../entities/PostEntity';

const prisma = new PrismaClient();

export class PostRepository {
  async findAll(): Promise<PostEntity[]> {
    const posts = await prisma.post.findMany();
    const postEntities: PostEntity[] = [];

    for (const post of posts) {
      postEntities.push(this.toPostEntity(post));
    }

    return postEntities;
  }

  async findByTitle(title: string): Promise<PostEntity[]> {
    const posts = await prisma.post.findMany({
      where: {
        title: {
          contains: title,
        },
      },
    });

    const postEntities: PostEntity[] = [];
    for (const post of posts) {
      postEntities.push(this.toPostEntity(post));
    }

    return postEntities;
  }

  // Método de pesquisa que busca posts com base no título
  async searchByTitle(title: string): Promise<PostEntity[]> {
    const posts = await prisma.post.findMany({
      where: {
        title: {
          contains: title, // Usando contains para pesquisa parcial
        },
      },
    });

    const postEntities: PostEntity[] = [];
    for (const post of posts) {
      postEntities.push(this.toPostEntity(post));
    }

    return postEntities;
  }

  async findById(id: string): Promise<PostEntity | null> {
    const post = await prisma.post.findUnique({ where: { id } });
    if (!post) return null;
    return this.toPostEntity(post);
  }

  async create(title: string, text: string, userId: string): Promise<PostEntity> {
    const post = await prisma.post.create({
      data: {
        title,
        text,
        userId,
      },
    });
    return this.toPostEntity(post);
  }

  async update(id: string, updatedFields: Partial<{ title: string; text: string }>): Promise<PostEntity | null> {
    const post = await prisma.post.update({
      where: { id },
      data: updatedFields,
    });
    if (!post) return null;
    return this.toPostEntity(post);
  }

  async delete(id: string): Promise<PostEntity | null> {
    const post = await prisma.post.delete({ where: { id } });
    if (!post) return null;
    return this.toPostEntity(post);
  }

  private toPostEntity(post: { id: string; title: string; text: string; userId: string }): PostEntity {
    return new PostEntity(post.title, post.text, post.userId || '', post.id);
  }
}
