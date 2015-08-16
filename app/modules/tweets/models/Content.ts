import {ISharedModel, SharedModel} from './shared';
import {Tweet} from '../entities/Tweet';

export interface IContentModel {
    tweets: Array<Tweet>
}
export class ContentModel implements IContentModel {
    private sharedModel: ISharedModel;
    public tweets: Array<Tweet>;
    constructor(sharedModel:ISharedModel){
        this.sharedModel = sharedModel;
        this.tweets = sharedModel.tweets;
    }
}
