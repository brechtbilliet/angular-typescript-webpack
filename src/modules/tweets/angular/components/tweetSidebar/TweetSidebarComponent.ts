import {SidebarModel} from '../../../core/models/impl/SidebarModel';
import {SharedModel} from '../../../core/models/impl/SharedModel';
const template: string = require('./TweetSidebarComponent.html');
export class TweetSidebarComponent implements ng.IComponentOptions {
    public template: string = template;
    public controller: Function = TweetSidebarController;
}
export class TweetSidebarController {
    public static $inject: Array<string> = ["SidebarModel", "SharedModel"];

    constructor(public model: SidebarModel, public sharedModel: SharedModel) {
    }

    public toggleCollapsed(): void {
        this.model.toggleCollapsed();
    }
}
