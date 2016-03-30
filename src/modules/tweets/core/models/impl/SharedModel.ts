import {Tweet} from "../../entities/Tweet";
import {TweetService} from '../../services/impl/TweetService';
export class SharedModel{
    public static $inject: Array<string> = ["TweetService"];
    public tweets: Array<Tweet>;
    public topbarCollapsed: Boolean = false;
    public sidebarCollapsed: Boolean = false;

    constructor(tweetService: TweetService) {
        this.tweets = tweetService.getAll();
    }

    public toggleTopbar(): void {
        this.topbarCollapsed = !this.topbarCollapsed;
    }

    public toggleSidebar(): void {
        this.sidebarCollapsed = !this.sidebarCollapsed;
    }

}

