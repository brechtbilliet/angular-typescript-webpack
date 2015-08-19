/// <reference path="../../../../_all.ts" />
import {StarController} from './StarController';
export interface IIsolateScope extends ng.IScope{
    starVm:StarController;
}
export interface IComponentAttributes{
    starred: boolean
}
export class StarComponent implements ng.IDirective{
    public restrict = 'E';
    public controllerAs = 'starVm';
    public bindToController = true;
    public scope = {
        starred: '='
    }
    public template = require('./index.html');
    public controller = StarController;
    public static Factory() {
        var directive = () => {
            return new StarComponent();
        }
        return directive
    }
}
export default StarComponent;