import Post from '../models/Post.js';

class PostRepository {
    async findAll() {
        return await Post.findAll();
    }

    async findById(id) {
        return await Post.findByPk(id);
    }

    async create(postData) {
        return await Post.create(postData);
    }

    async update(id, postData) {
        return await Post.update(postData, { where: { id } });
    }

    async delete(id) {
        return await Post.destroy({ where: { id } });
    }

    async searchPosts(query) {
        const searchQuery = `%${query}%`;
        return await Post.findAll({
            where: {
                [Op.or]: [
                    { title: { [Op.like]: searchQuery } },
                    { text: { [Op.like]: searchQuery } }
                ]
            }
        });
    }
}

export default new PostRepository();
