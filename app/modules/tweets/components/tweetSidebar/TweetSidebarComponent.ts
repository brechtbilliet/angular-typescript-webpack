/// <reference path="../../../../_all.ts" />
import TweetSidebarController from './TweetSidebarController';
export interface IIsolateScope extends ng.IScope{
    sidebarVm:TweetSidebarController;
}
export class TweetSidebarComponent {
    public restrict = 'E';
    public controllerAs = 'sidebarVm';
    public template = require('./index.html');
    public controller = TweetSidebarController;
}
export default TweetSidebarComponent;