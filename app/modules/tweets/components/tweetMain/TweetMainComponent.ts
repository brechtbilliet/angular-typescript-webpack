import {TweetMainController} from "./TweetSidebarController";
export interface IIsolateScope extends ng.IScope{
    mainVm: TweetMainController;
}
export class TweetMainComponent implements ng.IDirective{
    public restrict: string = "E";
    public controllerAs: string = "mainVm";
    public template: string = require("./index.html");
    public controller: Function = TweetMainController;
}
export default TweetMainComponent;