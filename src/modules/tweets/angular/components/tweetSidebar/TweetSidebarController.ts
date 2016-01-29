import {ISidebarModel} from "../../../core/models/int/ISidebarModel";
import {ISharedModel} from "../../../core/models/int/ISharedModel";
export class TweetSidebarController {
    public static $inject: Array<string> = ["ISidebarModel", "ISharedModel"];

    constructor(public model: ISidebarModel, public sharedModel: ISharedModel) {
    }
    public toggleCollapsed(): void {
        this.model.toggleCollapsed();
    }
}
