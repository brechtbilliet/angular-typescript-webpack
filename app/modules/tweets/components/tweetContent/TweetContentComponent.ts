/// <reference path="../../../../_all.ts" />
import TweetContentController from './TweetContentController';
export class TweetContentComponent {
    public restrict = 'E';
    public controllerAs = 'contentVm';
    public template = require('./index.html');
    public controller = TweetContentController;
    public static Factory() {
        var directive = () => {
            return new TweetContentComponent();
        }
        return directive
    }
}
export default TweetContentComponent;