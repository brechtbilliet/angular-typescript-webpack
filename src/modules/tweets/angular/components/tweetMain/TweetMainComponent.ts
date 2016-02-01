import {ISharedModel} from "../../../core/models/int/ISharedModel";
export class TweetMainComponent implements ng.IDirective{
    public controller: Function = TweetMainController;
    public template: string = `
        <tweet-topbar ng-class="{'topbar-collapsed': $ctrl.sharedModel.topbarCollapsed}"></tweet-topbar>
        <tweet-content></tweet-content>
    `;
}
export class TweetMainController {
    public static $inject: Array<string> = ["ISharedModel"];
    constructor(public sharedModel: ISharedModel) {
    }
}
