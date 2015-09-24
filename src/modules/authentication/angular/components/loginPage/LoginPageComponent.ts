import {LoginPageController} from "./LoginPageController";
export interface ILoginPageIsolateScope extends ng.IScope {
    pageVm: LoginPageController;
}
export class LoginPageComponent implements ng.IDirective {
    public restrict: string = "E";
    public template: string = require("./index.html");
    public controllerAs: string = "pageVm";
    public controller: Function = LoginPageController;
}