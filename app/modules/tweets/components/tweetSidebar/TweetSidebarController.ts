import {IRootModel, ISharedModel, ISidebarModel} from "../../models/Interfaces";

export default class TweetSidebarController {
    public static $inject: Array<string> = ["IRootModel"];
    public model: ISidebarModel;
    public sharedModel: ISharedModel;
    private _rootModel: IRootModel;

    constructor(rootModel: IRootModel) {
        this._rootModel = rootModel;
        this.sharedModel = this._rootModel.sharedModel;
        this.model = this._rootModel.sidebarModel;
    }
    public toggleCollapsed(): void {
        this.model.toggleCollapsed();
    }
}
