import {ContentModel} from '../../../core/models/impl/ContentModel';
const template: string = require('./TweetContentComponent.html');
export class TweetContentComponent implements ng.IComponentOptions {
    public controller: Function = TweetContentController;
    public template: string = template;
}
export class TweetContentController {
    public static $inject: Array<string> = ["ContentModel"];
    constructor(public model: ContentModel) {
    }
}
