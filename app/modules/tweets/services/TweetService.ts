import {Tweet} from '../entities/Tweet';

export interface ITweetService{
    getAll(): Array<Tweet>;
}
export class TweetService implements ITweetService{
    public getAll():Array<Tweet>{
       var returnObj = new Array<Tweet>();
        for(var i = 0; i < 5; i++){
            returnObj.push(new Tweet('Brecht', 'content', false));
        }
        return returnObj;
    }
}