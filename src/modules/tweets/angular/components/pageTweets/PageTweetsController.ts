import {ISharedModel, IRootModel} from "../../../core/index";

export class PageTweetsController {
    public static $inject: Array<string> = ["IRootModel"];
    public sharedModel: ISharedModel;

    private _rootModel: IRootModel;

    constructor(rootModel: IRootModel) {
        this._rootModel = rootModel;
        this.sharedModel = this._rootModel.sharedModel;
    }
}