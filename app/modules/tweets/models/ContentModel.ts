import {ISharedModel, IContentModel} from "./Interfaces";
import {Tweet} from "../entities/Tweet";

export class ContentModel implements IContentModel {
    public static $inject: Array<string> = ["ISharedModel"];
    public tweets: Array<Tweet>;

    private sharedModel: ISharedModel;

    constructor(sharedModel: ISharedModel) {
        this.sharedModel = sharedModel;
        this.tweets = sharedModel.tweets;
    }
}
