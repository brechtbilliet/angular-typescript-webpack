/// <reference path="../../../../_all.ts" />
export interface IStarAttributes{
    starred: boolean
}
export class StarController implements IStarAttributes{
    public starred: boolean;
    public toggle(): void{
        this.starred = !this.starred;
    }
    public static $inject = ['$scope']
}
export interface StarComponent{
    starVm:StarController;
}
export class StarComponent{
    public restrict = 'E';
    public controllerAs = 'starVm';
    public bindToController = true;
    public scope = {
        starred: '='
    }
    public template = require('./index.html');
    public controller:IStarAttributes = StarController;
    public static Factory() {
        var directive = () => {
            return new StarComponent();
        }
        return directive
    }
}
export default StarComponent;