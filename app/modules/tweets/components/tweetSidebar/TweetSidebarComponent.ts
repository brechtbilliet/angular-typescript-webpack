import TweetSidebarController from "./TweetSidebarController";
export interface IIsolateScope extends ng.IScope{
    sidebarVm: TweetSidebarController;
}
export class TweetSidebarComponent {
    public restrict: string = "E";
    public controllerAs: string = "sidebarVm";
    public template: string = require("./index.html");
    public controller: Function = TweetSidebarController;
}
export default TweetSidebarComponent;