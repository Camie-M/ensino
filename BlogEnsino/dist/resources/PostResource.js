"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostResource = void 0;
class PostResource {
    constructor(title, text, user_id, id) {
        this.id = id || '';
        this.title = title;
        this.text = text;
        this.user_id = user_id;
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }
}
exports.PostResource = PostResource;
