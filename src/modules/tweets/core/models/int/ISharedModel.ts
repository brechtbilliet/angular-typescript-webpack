import {Tweet} from "../../entities/Tweet";
export interface ISharedModel {
    tweets: Array<Tweet>;
    topbarCollapsed: Boolean;
    sidebarCollapsed: Boolean;
    toggleTopbar: () => void;
    toggleSidebar: () => void;
}