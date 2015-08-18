import {ISharedModel, ISidebarModel} from './Interfaces';
import Tweet from '../entities/Tweet';

export default class SidebarModel implements ISidebarModel {
    private sharedModel: ISharedModel;
    public tweets: Array<Tweet>;
    constructor(sharedModel:ISharedModel){
        this.sharedModel = sharedModel;
        this.tweets = sharedModel.tweets;
    }
    public toggleCollapsed() {
        this.sharedModel.toggleSidebar();
    }
    public static $inject = ['ISharedModel'];
}
