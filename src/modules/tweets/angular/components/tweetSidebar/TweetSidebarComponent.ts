import {TweetSidebarController} from "./TweetSidebarController";
export class TweetSidebarComponent {
    public restrict: string = "E";
    public controllerAs: string = "sidebarVm";
    public template: string = require("./index.html");
    public controller: Function = TweetSidebarController;
}