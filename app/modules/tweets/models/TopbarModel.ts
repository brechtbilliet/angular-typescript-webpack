import {ISharedModel, ITopbarModel} from './Interfaces';
import Tweet from '../entities/Tweet';

export default class TopbarModel implements ITopbarModel {
    public tweetContent:string;

    private sharedModel: ISharedModel;
    constructor(sharedModel:ISharedModel){
        this.sharedModel = sharedModel;
    }
    public toggleCollapsed() :void {
        this.sharedModel.toggleTopbar();
    }
    public addTweet(): void {
        this.sharedModel.tweets.push(new Tweet('@brecht', this.tweetContent, false));
        this.tweetContent = '';
    }
    public static $inject = ['ISharedModel'];
}
