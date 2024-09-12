export class Post {
    constructor(title, text, userId, id) {
        this.id = id || '';
        this.title = title;
        this.text = text;
        this.userId = userId;
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }
}
