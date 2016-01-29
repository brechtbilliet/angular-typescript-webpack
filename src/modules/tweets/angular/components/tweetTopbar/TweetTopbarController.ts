import {ITopbarModel} from "../../../core/models/int/ITopbarModel";
import {ISharedModel} from "../../../core/models/int/ISharedModel";
export class TweetTopbarController {
    public static $inject: Array<string> = ["ISharedModel", "ITopbarModel"];

    constructor(public sharedModel: ISharedModel, public model: ITopbarModel) {
    }

    public toggleCollapsed(): void {
        this.model.toggleCollapsed();
    }

    public post(): void {
        this.model.addTweet();
    }
}