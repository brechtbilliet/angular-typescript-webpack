/// <reference path="../../../_all.ts" />
import {Tweet} from '../entities/Tweet';
import * as _ from 'lodash';

export interface ITweetService{
    getAll(): Array<Tweet>;
}
export class TweetService implements ITweetService{
    public getAll():Array<Tweet>{
       var returnObj:Array<Tweet> = new Array<Tweet>();
        for(var i = 0; i < 5; i++){
            returnObj.push(new Tweet("@user", "Content", false));
    }
        return returnObj;
    }
}