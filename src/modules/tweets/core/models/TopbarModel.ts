import {ISharedModel, ITopbarModel} from "./Interfaces";
import {Tweet} from "../entities/Tweet";

export class TopbarModel implements ITopbarModel {
    public static $inject: Array<string> = ["ISharedModel"];
    public tweetContent: string;

    private sharedModel: ISharedModel;

    constructor(sharedModel: ISharedModel) {
        this.sharedModel = sharedModel;
    }

    public toggleCollapsed(): void {
        this.sharedModel.toggleTopbar();
    }

    public addTweet(): void {
        this.sharedModel.tweets.push(Tweet.createInstance("@brecht", this.tweetContent, false));
        this.tweetContent = "";
    }
}