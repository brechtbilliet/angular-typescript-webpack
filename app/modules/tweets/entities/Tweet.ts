export class Tweet {
    user:String;
    content:String;
    starred:Boolean;

    constructor(user:string, content:string, starred:Boolean) {
        this.user = user;
        this.content = content;
        this.starred = starred;
    }
    public static createInstance(user:string, content:string, starred:Boolean):Tweet{
        return new Tweet(user, content, starred);
    }
}
