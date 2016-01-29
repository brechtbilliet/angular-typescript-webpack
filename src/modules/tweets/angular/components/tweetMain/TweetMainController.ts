import {ISharedModel} from "../../../core/models/int/ISharedModel";
export class TweetMainController {
    public static $inject: Array<string> = ["ISharedModel"];
    constructor(public sharedModel: ISharedModel) {
    }
}
