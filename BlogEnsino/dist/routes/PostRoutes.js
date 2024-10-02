"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const PostController_1 = require("../controllers/PostController");
const postRoutes = (0, express_1.Router)();
postRoutes.post('', PostController_1.PostController.createPost);
postRoutes.get('', PostController_1.PostController.getAllPosts);
// Ajuste a rota para usar query parameters
postRoutes.get('/search', PostController_1.PostController.getPostByTitle);
postRoutes.get('/:id', PostController_1.PostController.getPostById);
postRoutes.put('/:id', PostController_1.PostController.editPost);
postRoutes.delete('/:id', PostController_1.PostController.deletePost);
exports.default = postRoutes;