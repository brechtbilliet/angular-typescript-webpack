export default class Tweet {
    user:String;
    content:String;
    starred:Boolean;

    constructor(user:string, content:string, starred:Boolean) {
        this.user = user;
        this.content = content;
        this.starred = starred;
    }
}
