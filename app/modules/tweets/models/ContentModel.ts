import {ISharedModel, IContentModel} from './Interfaces';
import {Tweet} from '../entities/Tweet';

export default class ContentModel implements IContentModel {
    private sharedModel: ISharedModel;
    public tweets: Array<Tweet>;
    constructor(sharedModel:ISharedModel){
        this.sharedModel = sharedModel;
        this.tweets = sharedModel.tweets;
    }
    public static $inject = ['ISharedModel'];
}
