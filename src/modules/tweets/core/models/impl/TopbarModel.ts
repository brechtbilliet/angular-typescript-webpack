import {Tweet} from "../../entities/Tweet";
import {SharedModel} from './SharedModel';
export class TopbarModel {
    public static $inject: Array<string> = ["SharedModel"];
    public tweetContent: string;

    constructor(private sharedModel: SharedModel) {
        this.sharedModel = sharedModel;
    }

    public toggleCollapsed(): void {
        this.sharedModel.toggleTopbar();
    }

    public addTweet(): void {
        this.sharedModel.tweets.push(new Tweet("@brecht", this.tweetContent, false));
        this.tweetContent = "";
    }
}