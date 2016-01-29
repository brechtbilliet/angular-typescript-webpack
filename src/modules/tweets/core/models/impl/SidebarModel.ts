import {ISidebarModel} from "../int/ISidebarModel";
import {Tweet} from "../../entities/Tweet";
import {ISharedModel} from "../int/ISharedModel";
export class SidebarModel implements ISidebarModel {
    public static $inject: Array<string> = ["ISharedModel"];
    public tweets: Array<Tweet>;
    private sharedModel: ISharedModel;

    constructor(sharedModel: ISharedModel) {
        this.sharedModel = sharedModel;
        this.tweets = sharedModel.tweets;
    }

    public toggleCollapsed(): void {
        this.sharedModel.toggleSidebar();
    }
}
