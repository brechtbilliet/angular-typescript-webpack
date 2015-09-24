import {RegisterPageController} from "./RegisterPageController";
export interface IRegisterPageIsolateScope extends ng.IScope {
    pageVm: RegisterPageController;
}
export class RegisterPageComponent implements  ng.IDirective{
    public restrict: string = "E";
    public template: string = require("./index.html");
    public controllerAs: string = "pageVm";
    public bindToController: Boolean = true;
    public controller: Function = RegisterPageController;
}