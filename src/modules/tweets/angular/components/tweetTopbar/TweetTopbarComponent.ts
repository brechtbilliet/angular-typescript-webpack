import {TweetTopbarController} from "./TweetTopbarController";
export class TweetTopbarComponent {
    public restrict: string = "E";
    public controllerAs: string = "topbarVm";
    public template: string = require("./index.html");
    public controller: Function = TweetTopbarController;
}
