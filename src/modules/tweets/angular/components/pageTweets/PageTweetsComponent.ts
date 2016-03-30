import {SharedModel} from '../../../core/models/impl/SharedModel';
export class PageTweetsComponent implements ng.IComponentOptions{
    public controller: Function = PageTweetsController;
    public template: string = `
        <tweet-sidebar ng-class="{'sidebar-collapsed': $ctrl.sharedModel.sidebarCollapsed}"></tweet-sidebar>
        <tweet-main></tweet-main>
    `
}
export class PageTweetsController {
    public static $inject: Array<string> = ["SharedModel"];
    constructor(public sharedModel: SharedModel) {
    }
}