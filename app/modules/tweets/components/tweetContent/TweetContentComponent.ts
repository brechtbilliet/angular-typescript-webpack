/// <reference path="../../../../_all.ts" />
import TweetContentController from './TweetContentController';
export interface IIsolateScope extends ng.IScope{
    contentVm:TweetContentController;
}
export class TweetContentComponent {
    public restrict = 'E';
    public controllerAs = 'contentVm';
    public template = require('./index.html');
    public controller = TweetContentController;
}
export default TweetContentComponent;