import {IRootModel, ISharedModel, ISidebarModel, ITopbarModel, IContentModel} from "./../Interfaces";
import {Tweet} from "../../entities/Tweet";
import "angular";
export class RootModelMock implements IRootModel {
    public sharedModel: ISharedModel = new SharedModelMock();
    public sidebarModel: ISidebarModel = new SidebarModelMock();
    public topbarModel: ITopbarModel = new TopbarModelMock();
    public contentModel: IContentModel = new ContentModelMock();
}
export class TopbarModelMock implements ITopbarModel {
    public tweetContent: string = "";
    public toggleCollapsed: () => void = angular.noop;
    public addTweet: () => void = angular.noop;
}
export class SidebarModelMock implements ISidebarModel {
    public toggleCollapsed: () => void = angular.noop;
    public tweets: Array<Tweet> = new Array<Tweet>();
}
export class ContentModelMock implements IContentModel {
    public tweets: Array<Tweet> = new Array<Tweet>();
}
export class SharedModelMock implements ISharedModel {
    public tweets: Array<Tweet> = new Array<Tweet>();
    public topbarCollapsed: Boolean = false;
    public sidebarCollapsed: Boolean = false;
    public toggleTopbar: () => void = angular.noop;
    public toggleSidebar: () => void = angular.noop;
}