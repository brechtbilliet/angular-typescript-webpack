import {Tweet} from '../entities/Tweet';
import {SharedModel, ISharedModel} from './Shared';
import Moment = require('moment');

export interface ITopbarModel {
    tweetContent: string;
    toggleCollapsed: () => void;
    addTweet: () => void;
}
export class TopbarModel implements ITopbarModel {
    public tweetContent:string;

    private sharedModel: ISharedModel;
    constructor(sharedModel:ISharedModel){
        this.sharedModel = sharedModel;
    }
    public toggleCollapsed() :void {
        this.sharedModel.topbarCollapsed = !this.sharedModel.topbarCollapsed;
    }
    public addTweet(): void {
        this.sharedModel.tweets.push(new Tweet('@brecht', this.tweetContent, false));
        this.tweetContent = '';
    }
}
