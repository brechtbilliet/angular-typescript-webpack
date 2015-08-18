/// <reference path="../../../../_all.ts" />
import PageTweetsController from './PageTweetsController';

export default class PageTweetsComponent {
    public restrict = 'E';
    public controllerAs = 'pageVm';
    public template = require('./index.html');
    public controller = PageTweetsController;
    public static Factory() {
        var directive = () => {
            return new PageTweetsComponent();
        }
        return directive
    }
}
