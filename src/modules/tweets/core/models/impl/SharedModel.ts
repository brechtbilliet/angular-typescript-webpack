import {ISharedModel} from "../int/ISharedModel";
import {Tweet} from "../../entities/Tweet";
import {ITweetService} from "../../services/int/ITweetService";
export class SharedModel implements ISharedModel {
    public static $inject: Array<string> = ["ITweetService"];
    public tweets: Array<Tweet>;
    private _topbarCollapsed: Boolean;
    private _sidebarCollapsed: Boolean;


    public get topbarCollapsed(): Boolean {
        return this._topbarCollapsed;
    }

    public get sidebarCollapsed(): Boolean {
        return this._sidebarCollapsed;
    }

    constructor(tweetService: ITweetService) {
        this._sidebarCollapsed = false;
        this._topbarCollapsed = false;
        this.tweets = tweetService.getAll();
    }

    public toggleTopbar(): void {
        this._topbarCollapsed = !this._topbarCollapsed;
    }

    public toggleSidebar(): void {
        this._sidebarCollapsed = !this._sidebarCollapsed;
    }

}

