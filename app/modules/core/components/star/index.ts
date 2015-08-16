/// <reference path="../../../../_all.ts" />
class StarController{
    public starred: boolean;

    public toggle(): void{
        this.starred = !this.starred;
    }
}
export class StarComponent{
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