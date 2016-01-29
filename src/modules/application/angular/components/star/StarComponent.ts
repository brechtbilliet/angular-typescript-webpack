import {StarController} from "./StarController";

export class StarComponent implements ng.IDirective {
    public restrict: string = "E";
    public controllerAs: string = "starVm";
    public bindToController: boolean = true;
    public scope: any = {
        starred: "="
    }
    public template: string = require("./index.html");
    public controller: Function = StarController;
}
export default StarComponent;