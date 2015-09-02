import {ISharedModel, ISidebarModel} from "./Interfaces";
import {Tweet} from "../entities/Tweet";

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
