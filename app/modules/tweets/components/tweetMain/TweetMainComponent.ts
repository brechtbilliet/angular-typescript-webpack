/// <reference path="../../../../_all.ts" />
import TweetMainController from './TweetSidebarController';
export interface IIsolateScope extends ng.IScope{
    mainVm:TweetMainController;
}
export class TweetMainComponent {
    public restrict = 'E';
    public controllerAs = 'mainVm';
    public template = require('./index.html');
    public controller = TweetMainController;
}
export default TweetMainComponent;