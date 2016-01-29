import {TweetContentController} from "./TweetContentController";
export class TweetContentComponent implements ng.IDirective {
    public restrict: string = "E";
    public controllerAs: string = "contentVm";
    public template: string = require("./index.html");
    public controller: Function = TweetContentController;
}
