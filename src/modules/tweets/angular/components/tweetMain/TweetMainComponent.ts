import {TweetMainController} from "./TweetMainController";
export class TweetMainComponent implements ng.IDirective{
    public restrict: string = "E";
    public controllerAs: string = "mainVm";
    public template: string = require("./index.html");
    public controller: Function = TweetMainController;
}
