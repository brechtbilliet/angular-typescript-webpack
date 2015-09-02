import {IRootModel, IContentModel} from "../../models/Interfaces";

export default class TweetContentController {
    public static $inject: Array<string> = ["IRootModel"];
    public model: IContentModel;

    private _rootModel: IRootModel;

    constructor(rootModel: IRootModel) {
        this._rootModel = rootModel;
        this.model = this._rootModel.contentModel;
    }
}