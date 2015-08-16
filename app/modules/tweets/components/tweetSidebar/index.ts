/// <reference path="../../../../_all.ts" />
import * as Root from '../../models/Root';
import {ISharedModel} from '../../models/Shared';
import {ISidebarModel} from '../../models/Sidebar';

class TweetSidebarController{
    public model: ISidebarModel;
    public sharedModel: ISharedModel;
    constructor(){
        this.sharedModel = Root.getRootModel().sharedModel;
        this.model = Root.getRootModel().sidebarModel;
    }
    public toggleCollapsed(): void{
        this.model.toggleCollapsed();
    }
}

export class TweetSidebarComponent {
    public restrict = 'E';
    public controllerAs = 'sidebarVm';
    public template = require('./index.html');
    public controller = TweetSidebarController;
    public static Factory() {
        var directive = () => {
            return new TweetSidebarComponent();
        }
        return directive
    }
}
export default TweetSidebarComponent;