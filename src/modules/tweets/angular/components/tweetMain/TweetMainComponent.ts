import {SharedModel} from '../../../core/models/impl/SharedModel';
const template: string = require('./TweetMainComponent.html');
export class TweetMainComponent implements ng.IComponentOptions{
    public controller: Function = TweetMainController;
    public template: string = template;
}
export class TweetMainController {
    public static $inject: Array<string> = ["SharedModel"];
    constructor(public sharedModel: SharedModel) {
    }
}
