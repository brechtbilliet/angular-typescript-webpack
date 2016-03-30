import {SharedModel} from '../../../core/models/impl/SharedModel';
export class TweetMainComponent implements ng.IComponentOptions{
    public controller: Function = TweetMainController;
    public template: string = `
        <tweet-topbar ng-class="{'topbar-collapsed': $ctrl.sharedModel.topbarCollapsed}"></tweet-topbar>
        <tweet-content></tweet-content>
    `;
}
export class TweetMainController {
    public static $inject: Array<string> = ["SharedModel"];
    constructor(public sharedModel: SharedModel) {
    }
}
