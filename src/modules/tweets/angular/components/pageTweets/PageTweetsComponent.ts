import {ISharedModel} from "../../../core/models/int/ISharedModel";
export class PageTweetsComponent implements ng.IComponentOptions{
    public controller: Function = PageTweetsController;
    public template: string = `
        <tweet-sidebar ng-class="{'sidebar-collapsed': $ctrl.sharedModel.sidebarCollapsed}"></tweet-sidebar>
        <tweet-main></tweet-main>
    `
}
export class PageTweetsController {
    public static $inject: Array<string> = ["ISharedModel"];
    constructor(public sharedModel: ISharedModel) {
    }
}