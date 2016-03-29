export class Idea {

    public id: string;
    public title: string;
    public description: string;
    public category: string;
    public isSecret: boolean;

    constructor() {
        this.id = '';
        this.title = '';
        this.description = '';
        this.category = '';
        this.isSecret = false;
    }

}