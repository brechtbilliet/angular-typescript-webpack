import {ITweetService} from "./Interfaces";
import {Tweet} from "../entities/Tweet";
import "angular";

export class TweetServiceMock implements ITweetService {
    public getAll(): Array<Tweet> {
        return undefined;
    }
}
