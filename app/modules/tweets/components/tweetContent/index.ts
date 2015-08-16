/// <reference path="../../../../_all.ts" />
import * as Root from '../../models/Root';
import {IContentModel,ContentModel} from '../../models/Content';
class TweetContentController{
    public model: IContentModel
    constructor(){
        this.model = Root.getRootModel().contentModel;
    }
}

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