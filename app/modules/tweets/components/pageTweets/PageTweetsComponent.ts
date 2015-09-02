import {PageTweetsController} from "./PageTweetsController";
export interface IIsolateScope extends ng.IScope {
    pageVm: PageTweetsController;
}
export class PageTweetsComponent implements ng.IDirective{
    public restrict: string = "E";
    public controllerAs: string = "pageVm";
    public template: string = require("./index.html");
    public controller: Function = PageTweetsController;
}