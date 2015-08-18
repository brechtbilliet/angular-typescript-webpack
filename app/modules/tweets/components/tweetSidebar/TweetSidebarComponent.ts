/// <reference path="../../../../_all.ts" />
import TweetSidebarController from './TweetSidebarController';
export class TweetSidebarComponent {
    public restrict = 'E';
    public controllerAs = 'sidebarVm';
    public template = require('./index.html');
    public controller = TweetSidebarController;
    public static Factory() {
        var directive = () => {
            return new TweetSidebarComponent();
        }
        return directive
    }
}
export default TweetSidebarComponent;