import {ITweetService} from "../int/ITweetService";
import {Tweet} from "../../entities/Tweet";
export class TweetService implements ITweetService {
    public getAll(): Array<Tweet> {
        var returnObj: Array<Tweet> = new Array<Tweet>();
        for (var i: number = 0; i < 5; i++) {
            returnObj.push(new Tweet("@user", "Content", false));
        }
        return returnObj;
    }
}