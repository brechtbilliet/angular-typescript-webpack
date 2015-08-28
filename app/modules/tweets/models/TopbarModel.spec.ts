/// <reference path="../../../_all.ts" />
import {ITopbarModel, ISharedModel} from './Interfaces';
import {TopbarModel} from './TopbarModel';
import {SharedModelMock} from './Mocks';
describe('Model: TopbarModel', () =>{
    var sharedModelMock: ISharedModel;
    var topbarModel: ITopbarModel;
    beforeEach(() =>{
        sharedModelMock = new SharedModelMock();
        topbarModel= new TopbarModel(sharedModelMock);
    });
    describe('on toggleCollapsed()', () =>{
        it('should collapse the topbar', () =>{
            spyOn(sharedModelMock, 'toggleTopbar');
            topbarModel.toggleCollapsed();
            expect(sharedModelMock.toggleTopbar).toHaveBeenCalled();
        })
    });
    describe('on addTweet', () =>{
        it('should add a tweet', () =>{
            topbarModel.tweetContent = '';
            var originalLength = sharedModelMock.tweets.length;
            topbarModel.addTweet();
            expect(sharedModelMock.tweets.length).toBe(originalLength +1);
        })
    })
});