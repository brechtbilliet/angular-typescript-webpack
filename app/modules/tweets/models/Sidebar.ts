import {ISharedModel, SharedModel} from './shared';
import {Tweet} from '../entities/Tweet';

export interface ISidebarModel {
    toggleCollapsed: () => void;
}
export class SidebarModel implements ISidebarModel {
    private sharedModel: ISharedModel;
    public tweets: Array<Tweet>;
    constructor(sharedModel:ISharedModel){
        this.sharedModel = sharedModel;
        this.tweets = sharedModel.tweets;
    }
    public toggleCollapsed() {
        this.sharedModel.sidebarCollapsed = !this.sharedModel.sidebarCollapsed;
    }
}
