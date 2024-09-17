import { Post } from '../models/Post';
import { Op } from 'sequelize';
import { PostEntity } from '../entities/PostEntity'; // Importa a entidade

export class PostRepository {
    // Retorna uma lista de PostEntities
    async findAll(): Promise<PostEntity[]> {
        const posts = await Post.findAll();
        return posts.map(post => new PostEntity(post.title, post.text, post.user_id, post.id));
    }

    // Retorna uma lista de PostEntities ao buscar pelo título
    async findByTitle(title: string): Promise<PostEntity[]> {
        try {
            const posts = await Post.findAll({
                where: {
                    title: {
                        [Op.like]: `%${title}%`
                    }
                }
            });

            return posts.map(post => new PostEntity(post.title, post.text, post.user_id, post.id));
        } catch (error) {
            console.error(`Erro ao procurar pelo titulo ${title} :`, error);
            throw new Error(`Erro ao procurar pelo titulo ${title} :`);
        }
    }

    // Busca por ID e retorna PostEntity
    async findById(id: string): Promise<PostEntity | null> {
        const post = await Post.findByPk(id);
        if (post) {
            return new PostEntity(post.title, post.text, post.user_id, post.id);
        }
        return null;
    }

    // Cria um post e retorna PostEntity
    async create(title: string, text: string, user_id: string): Promise<PostEntity> {
        try {
            const post = await Post.create({
                title,
                text,
                user_id
            });

            if (!user_id) {
                throw new Error('User ID is missing');
            }

            return new PostEntity(post.title, post.text, post.user_id, post.id);
        } catch (error) {
            console.error('Failed to create post:', error);
            throw new Error('Failed to create post');
        }
    }

    // Atualiza um post e retorna PostEntity
    async update(id: string, updatedFields: Partial<{ title: string; text: string }>): Promise<PostEntity | null> {
        try {
            const post = await Post.findByPk(id);
            if (post) {
                const updatedPost = await post.update(updatedFields);
                return new PostEntity(updatedPost.title, updatedPost.text, updatedPost.user_id, updatedPost.id);
            }
        } catch (error) {
            throw new Error(`Não foi possível atualizar o Post ${error}`);
        }
        return null;
    }

    // Deleta um post e retorna PostEntity ou null
    async delete(id: string): Promise<PostEntity | null> {
        try {
            const post = await Post.findByPk(id);
            if (post) {
                await post.destroy();
                return new PostEntity(post.title, post.text, post.user_id, post.id);
            }
        } catch (error) {
            throw new Error(`Não foi possível deletar o Post ${error}`);
        }
        return null;
    }
}
