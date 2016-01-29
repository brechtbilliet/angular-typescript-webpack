import "../../index";
import "angular";
import "angular-mocks";
import {TweetContentController} from "./TweetContentController";
import {ComponentTest} from "../../../../util/ComponentTest";
import {IContentModel} from "../../../core/models/int/IContentModel";

describe("Component TweetContentComponent", () => {
    var directiveTest: ComponentTest<TweetContentController>;
    var contentModelMock: IContentModel;
    beforeEach(angular.mock.module("app.tweets", ($provide: any) => {
        contentModelMock = <IContentModel>{};
        $provide.service("IContentModel", () =>  contentModelMock);
    }));
    beforeEach(() => {
        directiveTest = new ComponentTest<TweetContentController>("<tweet-content></tweet-content>", "tweetContent");
    });

    it("should expose the sharedModel", () => {
        var vm: TweetContentController = directiveTest.createComponent({});
        expect(vm.model).toBe(contentModelMock);
    });
});