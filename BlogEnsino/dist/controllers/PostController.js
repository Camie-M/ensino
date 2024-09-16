"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostController = void 0;
const PostRepository_1 = require("../repositories/PostRepository");
const postRepository = new PostRepository_1.PostRepository();
class PostController {
    static async createPost(req, res) {
        try {
            const { title, text, user_id } = req.body;
            const post = await postRepository.create(title, text, user_id);
            res.status(201).json(post);
            console.log({ title, text, user_id });
        }
        catch (error) {
            res.status(500).json({ message: "Falha ao criar o Post", error });
            throw new Error(`Falha ao criar o Post", ${error}`);
        }
    }
    static async getAllPosts(req, res) {
        try {
            const posts = await postRepository.findAll();
            res.status(200).json(posts);
        }
        catch (error) {
            res.status(500).json({ message: "Failed to retrieve posts", error });
        }
    }
    static async getPostById(req, res) {
        try {
            const post = await postRepository.findById(req.params.id);
            if (post) {
                res.status(200).json(post);
            }
            else {
                res.status(404).json({ message: "Post not found" });
            }
        }
        catch (error) {
            res.status(500).json({ message: "Failed to retrieve post", error });
        }
    }
    static async editPost(req, res) {
        try {
            const updatedPost = await postRepository.update(req.params.id, req.body);
            if (updatedPost) {
                res.status(200).json(updatedPost);
            }
            else {
                res.status(404).json({ message: "Post not found" });
            }
        }
        catch (error) {
            res.status(500).json({ message: "Failed to update post", error });
        }
    }
    static async deletePost(req, res) {
        try {
            const success = await postRepository.delete(req.params.id);
            if (success) {
                res.status(200).json({ message: "Post deleted successfully" });
            }
            else {
                res.status(404).json({ message: "Post not found" });
            }
        }
        catch (error) {
            res.status(500).json({ message: "Failed to delete post", error });
        }
    }
}
exports.PostController = PostController;
