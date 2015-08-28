/// <reference path="../../../_all.ts" />
import {ITweetService} from './Interfaces';
import {Tweet} from '../entities/Tweet';
import 'angular';
export class TweetServiceMock implements ITweetService{
    getAll():Array<Tweet> {
        return undefined;
    }
}
