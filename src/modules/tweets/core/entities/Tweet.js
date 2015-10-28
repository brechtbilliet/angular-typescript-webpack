export class Tweet {
    constructor(user, content, starred) {
        this.user = user;
        this.content = content;
        this.starred = starred;
    }
    static createInstance(user, content, starred) {
        return new Tweet(user, content, starred);
    }
}
