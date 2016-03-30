import {Tweet} from "../../entities/Tweet";
import {SharedModel} from './SharedModel';

export class ContentModel {
    public static $inject: Array<string> = ["SharedModel"];
    public tweets: Array<Tweet>;

    constructor(sharedModel: SharedModel) {
        this.tweets = sharedModel.tweets;
    }
}
