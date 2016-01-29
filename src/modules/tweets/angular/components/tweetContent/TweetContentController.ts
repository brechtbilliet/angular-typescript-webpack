import {IContentModel} from "../../../core/models/int/IContentModel";
export class TweetContentController {
    public static $inject: Array<string> = ["IContentModel"];

    constructor(public model: IContentModel) {
    }
}