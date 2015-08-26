import {ISharedModel, IRootModel, ITopbarModel} from '../../models/Interfaces';

export default class PageTweetsController{
    public sharedModel: ISharedModel;

    private _rootModel:IRootModel;

    constructor(rootModel:IRootModel){
        this._rootModel = rootModel;
        this.sharedModel = this._rootModel.sharedModel;
    }
    public static $inject = ['IRootModel'];
}