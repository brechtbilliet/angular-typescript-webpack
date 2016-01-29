import {ISharedModel} from "./ISharedModel";
import {ISidebarModel} from "./ISidebarModel";
import {ITopbarModel} from "./ITopbarModel";
import {IContentModel} from "./IContentModel";
export interface IRootModel {
    sharedModel: ISharedModel;
    sidebarModel: ISidebarModel;
    topbarModel: ITopbarModel;
    contentModel: IContentModel;
}