import {Tweet} from "../../entities/Tweet";
import {SharedModel} from './SharedModel';
export class SidebarModel {
    public static $inject: Array<string> = ["SharedModel"];
    public tweets: Array<Tweet>;

    constructor(private sharedModel: SharedModel) {
        this.tweets = sharedModel.tweets;
    }

    public toggleCollapsed(): void {
        this.sharedModel.toggleSidebar();
    }
}
