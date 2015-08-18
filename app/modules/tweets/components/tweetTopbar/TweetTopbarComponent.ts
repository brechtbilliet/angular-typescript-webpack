/// <reference path="../../../../_all.ts" />
import TweetTopbarController from './TweetTopbarController';

export class TweetTopbarComponent {
    public restrict = 'E';
    public controllerAs = 'topbarVm';
    public template = require('./index.html');
    public controller = TweetTopbarController;
    public static Factory() {
        var directive = () => {
            return new TweetTopbarComponent();
        }
        return directive
    }
}
export default TweetTopbarComponent;