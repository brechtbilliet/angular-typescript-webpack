/// <reference path="../../../../_all.ts" />
import * as Root from '../../models/Root';
import {ISharedModel} from '../../models/Shared';
import {ITopbarModel} from '../../models/Topbar';

class TweetTopbarController{
    public model: ITopbarModel;
    public sharedModel: ISharedModel;
    constructor(){
        this.sharedModel = Root.getRootModel().sharedModel;
        this.model = Root.getRootModel().topBarModel;
    }
    public toggleCollapsed():void{
        this.model.toggleCollapsed();
    }
    public post():void{
        this.model.addTweet();
    }
}

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