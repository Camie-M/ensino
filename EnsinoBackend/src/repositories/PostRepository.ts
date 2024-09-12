import { PostEntity } from '../entities/PostEntity';
import { v4 as uuidv4 } from 'uuid';

export class PostRepository {
    private posts: PostEntity[] = [];

    async findAll(): Promise<PostEntity[]> {
        return this.posts;
    }

    async findById(id: string): Promise<PostEntity | null> {
        const post = this.posts.find(post => post.id === id);
        return post || null;
    }

    async create(title: string, text: string, userId: string): Promise<PostEntity> {
        const newPost = new PostEntity(title, text, userId, uuidv4());
        this.posts.push(newPost);
        return newPost;
    }

    async update(id: string, updatedFields: Partial<PostEntity>): Promise<PostEntity | null> {
        const postIndex = this.posts.findIndex(post => post.id === id);
        if (postIndex !== -1) {
            this.posts[postIndex] = { ...this.posts[postIndex], ...updatedFields, updatedAt: new Date() };
            return this.posts[postIndex];
        }
        return null;
    }

    async delete(id: string): Promise<boolean> {
        const postIndex = this.posts.findIndex(post => post.id === id);
        if (postIndex !== -1) {
            this.posts.splice(postIndex, 1);
            return true;
        }
        return false;
    }
}
