import {ISidebarModel} from "../../../core/models/int/ISidebarModel";
import {ISharedModel} from "../../../core/models/int/ISharedModel";
export class TweetSidebarComponent implements ng.IComponentOptions{
    public template: string = `
        <div ng-class="{'sidebar-collapsed': $ctrl.sharedModel.sidebarCollapsed}">
            <div>
                <i ng-click="$ctrl.toggleCollapsed()" class="fa dp-collapse dp-collapse-right"
                ng-class="{'fa-chevron-left': !$ctrl.sharedModel.sidebarCollapsed, 'fa-chevron-right': $ctrl.sharedModel.sidebarCollapsed}"></i>
                <div class="collapsed-content">
                    <h2>Starred tweets</h2>
                    <p>Here we have an overview of our starred tweets</p>
                    <div ng-repeat="tweet in $ctrl.model.tweets" ng-if="tweet.starred">
                        {{::tweet.user}} has tweeted {{::tweet.content}}
                    </div>
                </div>
            </div>
        </div>
    `
    public controller: Function = TweetSidebarController;
}
export class TweetSidebarController {
    public static $inject: Array<string> = ["ISidebarModel", "ISharedModel"];

    constructor(public model: ISidebarModel, public sharedModel: ISharedModel) {
    }
    public toggleCollapsed(): void {
        this.model.toggleCollapsed();
    }
}
