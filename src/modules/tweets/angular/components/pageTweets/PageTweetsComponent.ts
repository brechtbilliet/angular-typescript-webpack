import {SharedModel} from '../../../core/models/impl/SharedModel';
const template: string = require('./PageTweetsComponent.html');

export class PageTweetsComponent implements ng.IComponentOptions{
    public controller: Function = PageTweetsController;
    public template: string = template;
}
export class PageTweetsController {
    public static $inject: Array<string> = ["SharedModel"];
    constructor(public sharedModel: SharedModel) {
    }
}
