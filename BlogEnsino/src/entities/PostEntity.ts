export class PostEntity {
    public id: string;
    public title: string;
    public text: string;
    public userId: string;
    public createdAt: Date;
    public updatedAt: Date;

    constructor(title: string, text: string, userId: string, id?: string) {
        this.id = id || '';
        this.title = title;
        this.text = text;
        this.userId = userId;
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }
}
