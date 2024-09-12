export class User {
    constructor(username, role, id) {
        this.id = id || '';
        this.username = username;
        this.role = role;
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }
}
