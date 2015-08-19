/// <reference path="../../../../_all.ts" />
import PageTweetsController from './PageTweetsController';
export interface IIsolateScope extends ng.IScope{
    pageVm:PageTweetsController;
}
export class PageTweetsComponent implements ng.IDirective{
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
