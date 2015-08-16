import {SharedModel, ISharedModel} from './Shared';
import {ContentModel, IContentModel} from './Content';
import {SidebarModel, ISidebarModel} from './Sidebar';
import {TopbarModel, ITopbarModel} from './Topbar';

export interface IRootModel{
    sharedModel: ISharedModel;
    sidebarModel: ISidebarModel;
    topBarModel: ITopbarModel;
    contentModel: IContentModel;
    topBarCollapsed: Boolean;
    sidebarCollapsed: Boolean;
}
export function getRootModel(): IRootModel{
    return SingletonRootModel.getInstance();
}
export class SingletonRootModel implements IRootModel{
    private static _instance:SingletonRootModel = new SingletonRootModel();
    public sharedModel: ISharedModel;
    public sidebarModel: ISidebarModel;
    public topBarModel: ITopbarModel;
    public contentModel: IContentModel;
    public topBarCollapsed: Boolean;
    public sidebarCollapsed: Boolean;
    constructor(){
        if(SingletonRootModel._instance){
            throw new Error("Error: Instantiation failed: Use SingletonRootModel.getInstance() instead of new.");
        }
        this.sharedModel = new SharedModel();
        this.sidebarModel = new SidebarModel(this.sharedModel);
        this.topBarModel = new TopbarModel(this.sharedModel);
        this.contentModel = new ContentModel(this.sharedModel);
        this.topBarCollapsed = false;
        this.sidebarCollapsed = false;
        SingletonRootModel._instance = this;
    }
    public static getInstance():SingletonRootModel
    {
        return SingletonRootModel._instance;
    }
}