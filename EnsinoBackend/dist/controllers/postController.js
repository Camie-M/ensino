var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { PostRepository } from "../repositories/PostRepository";
const postRepository = new PostRepository();
export class PostController {
    static createPost(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { title, text, userId } = req.body;
                const post = yield postRepository.create(title, text, userId);
                res.status(201).json(post);
            }
            catch (error) {
                res.status(500).json({ message: "Failed to create post", error });
            }
        });
    }
    static getAllPosts(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const posts = yield postRepository.findAll();
                res.status(200).json(posts);
            }
            catch (error) {
                res.status(500).json({ message: "Failed to retrieve posts", error });
            }
        });
    }
    static getPostById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const post = yield postRepository.findById(req.params.id);
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
        });
    }
    static editPost(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const updatedPost = yield postRepository.update(req.params.id, req.body);
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
        });
    }
    static deletePost(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const success = yield postRepository.delete(req.params.id);
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
        });
    }
}
