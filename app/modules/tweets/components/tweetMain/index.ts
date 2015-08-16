/// <reference path="../../../../_all.ts" />
import * as Root from '../../models/Root';
import {ISharedModel} from '../../models/Shared';

class TweetMainController{
    public sharedModel: ISharedModel;
    constructor(){
        this.sharedModel = Root.getRootModel().sharedModel;
    }
}

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