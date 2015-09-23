import {ITopbarModel, ISharedModel, IRootModel} from "../../../core/index";

export class TweetTopbarController {
    public static $inject: Array<string> = ["IRootModel"];
    public model: ITopbarModel;
    public sharedModel: ISharedModel;
    private _rootModel: IRootModel;

    constructor(rootModel: IRootModel) {
        this._rootModel = rootModel;
        this.sharedModel = this._rootModel.sharedModel;
        this.model = this._rootModel.topbarModel;
    }

    public toggleCollapsed(): void {
        this.model.toggleCollapsed();
    }

    public post(): void {
        this.model.addTweet();
    }
}