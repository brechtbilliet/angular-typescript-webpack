import {PageController} from "./PageController";
export interface IPageIsolateScope extends ng.IScope{
    pageVm: PageController
}
export class PageComponent {
    public restrict: string = "E";
    public template: string = require("./index.html");
    public controllerAs: string = "pageVm";
    public bindToController: boolean = true;
    public controller: Function = PageController;
}