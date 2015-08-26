import {Tweet} from '../entities/Tweet';
export interface IContentModel {
    tweets: Array<Tweet>
}
export interface IRootModel{
    sharedModel: ISharedModel;
    sidebarModel: ISidebarModel;
    topbarModel: ITopbarModel;
    contentModel: IContentModel;
}
export interface ISharedModel{
    tweets: Array<Tweet>;
    topbarCollapsed: Boolean,
    sidebarCollapsed: Boolean,
    toggleTopbar: () => void,
    toggleSidebar: () => void
}
export interface ISidebarModel {
    toggleCollapsed: () => void;
    tweets: Array<Tweet>;
}

export interface ITopbarModel {
    tweetContent: string;
    toggleCollapsed: () => void;
    addTweet: () => void;
}