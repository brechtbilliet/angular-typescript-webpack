import {RegisterPageController} from "./RegisterPageController";
require("./registerPage.scss");
export interface IIsolateScope extends ng.IScope {
    pageVm: RegisterPageController;
}
export class RegisterPageComponent implements  ng.IDirective{
    public restrict: string = "E";
    public template: string = require("./index.html");
    public controllerAs: string = "pageVm";
    public controller: Function = RegisterPageController;
}