/// <reference path="../../../_all.ts" />
import {IRootModel, ISharedModel, ISidebarModel, ITopbarModel, IContentModel} from './Interfaces';
import {Tweet} from '../entities/Tweet';
import 'angular';
export class RootModelMock implements IRootModel{
    sharedModel:ISharedModel = new SharedModelMock();
    sidebarModel:ISidebarModel = new SidebarModelMock();
    topbarModel:ITopbarModel = new TopbarModelMock();
    contentModel:IContentModel = new ContentModelMock();
}
export class TopbarModelMock implements ITopbarModel{
    tweetContent:string = '';
    toggleCollapsed:()=>void = angular.noop;
    addTweet:()=>void = angular.noop;
}
export class SidebarModelMock implements ISidebarModel{
    toggleCollapsed:()=>void = angular.noop;
    tweets:Array<Tweet> = new Array<Tweet>();
}
export class ContentModelMock implements IContentModel{
    tweets:Array<Tweet> = new Array<Tweet>();
}
export class SharedModelMock implements ISharedModel{
    tweets:Array<Tweet> = new Array<Tweet>();
    topbarCollapsed:Boolean = false;
    sidebarCollapsed:Boolean = false;
    toggleTopbar:()=>void = angular.noop;
    toggleSidebar:()=>void = angular.noop;
}