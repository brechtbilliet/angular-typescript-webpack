/// <reference path="../../../../_all.ts" />
import TweetMainController from './TweetSidebarController';
export class TweetMainComponent {
    public restrict = 'E';
    public controllerAs = 'mainVm';
    public template = require('./index.html');
    public controller = TweetMainController;
    public static Factory() {
        var directive = () => {
            return new TweetMainComponent();
        }
        return directive
    }
}
export default TweetMainComponent;