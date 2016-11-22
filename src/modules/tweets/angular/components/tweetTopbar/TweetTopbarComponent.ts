import {TopbarModel} from '../../../core/models/impl/TopbarModel';
import {SharedModel} from '../../../core/models/impl/SharedModel';
const template: string = require('./TweetTopbarComponent.html');
export class TweetTopbarComponent implements ng.IComponentOptions{
    public controller: Function = TweetTopbarController;
    public template: string = template;
}
export class TweetTopbarController {
    public static $inject: Array<string> = ["SharedModel", "TopbarModel"];

    constructor(public sharedModel: SharedModel, public model: TopbarModel) {
    }

    public toggleCollapsed(): void {
        this.model.toggleCollapsed();
    }

    public post(): void {
        this.model.addTweet();
    }
}
