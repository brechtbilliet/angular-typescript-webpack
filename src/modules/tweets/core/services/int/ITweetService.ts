import {Tweet} from "../../entities/Tweet";
export interface ITweetService {
    getAll(): Array<Tweet>;
}
