import {ISharedModel} from "../../../core/models/int/ISharedModel";
export class PageTweetsController {
    public static $inject: Array<string> = ["ISharedModel"];
    constructor(public sharedModel: ISharedModel) {
    }
}