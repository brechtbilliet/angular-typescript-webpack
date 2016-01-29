import {Tweet} from "../../entities/Tweet";
export interface ISidebarModel {
    toggleCollapsed: () => void;
    tweets: Array<Tweet>;
}