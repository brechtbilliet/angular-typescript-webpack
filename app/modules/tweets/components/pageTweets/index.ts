/// <reference path="../../../../_all.ts" />
import * as Root from '../../models/Root';
import {ISharedModel} from '../../models/Shared';
import {Tweet} from '../../entities/Tweet';
class PageTweetsController{
    public sharedModel: ISharedModel;
    constructor(){
        this.sharedModel = Root.getRootModel().sharedModel;
    }
}

export class PageTweetsComponent {
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
export default PageTweetsComponent;