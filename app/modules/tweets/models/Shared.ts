import {Tweet} from '../entities/Tweet';
import {TweetService} from '../services/TweetService';

export interface ISharedModel{
    tweets: Array<Tweet>;
    topbarCollapsed: Boolean,
    sidebarCollapsed: Boolean
}
export class SharedModel implements ISharedModel{
    public tweets: Array<Tweet>;
    public topbarCollapsed: Boolean;
    public sidebarCollapsed: Boolean;
    constructor(){
        this.sidebarCollapsed = false;
        this.topbarCollapsed = false;
        var tweetService = new TweetService();
        this.tweets = tweetService.getAll();
    }
}

