import {IContentModel} from "../int/IContentModel";
import {Tweet} from "../../entities/Tweet";
import {ISharedModel} from "../int/ISharedModel";

export class ContentModel implements IContentModel {
    public static $inject: Array<string> = ["ISharedModel"];
    public tweets: Array<Tweet>;

    private sharedModel: ISharedModel;

    constructor(sharedModel: ISharedModel) {
        this.sharedModel = sharedModel;
        this.tweets = sharedModel.tweets;
    }
}
