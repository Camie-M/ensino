import { Post } from '../models/Post';
import { Op } from 'sequelize';
import { PostResource } from '../resources/PostResource'; 

export class PostRepository {
    
    create(title: string, text: string, author: string, image_url: string, user_id: string): Promise<Post> {
        return Post.create({ title, text, author, image_url, user_id })
    }

    
    findAll(): Promise<Post[]> {
        return Post.findAll();
    }

    
    findByTitle(title: string): Promise<Post[]> {
        return Post.findAll({
            where: {
                title: { [Op.like]: `%${title}%` }
            },
        });
    }

    
    findById(id: string): Promise<Post | null> {
        return Post.findByPk(id)
    }


    
    update(post: Post, fields: { title: string; text: string }): Promise<Post> {
        return post.update(fields)
    }

    updateWithImage(post: Post, fields: { title: string; text: string, image_url: string }): Promise<Post> {
        return post.update(fields)
    }

    
    delete(post: Post): Promise<void> {
        return post.destroy()
    }
}
