import {TweetContentController} from "./TweetContentController";
export interface IIsolateScope extends ng.IScope{
    contentVm: TweetContentController;
}
export class TweetContentComponent implements ng.IDirective {
    public restrict: string = "E";
    public controllerAs: string = "contentVm";
    public template: string = require("./index.html");
    public controller: Function = TweetContentController;
}
export default TweetContentComponent;