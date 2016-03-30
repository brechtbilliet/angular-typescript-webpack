import "../../index";
import "angular";
import "angular-mocks";
import {ComponentTest} from "../../../../util/ComponentTest";
import 'phantomjs-polyfill';
import {TweetContentController} from "./TweetContentComponent";
import {ContentModel} from '../../../core/models/impl/ContentModel';

describe("Component TweetContentComponent", () => {
    var directiveTest: ComponentTest<TweetContentController>;
    var contentModelMock: ContentModel;
    beforeEach(angular.mock.module("app.tweets", ($provide: any) => {
        contentModelMock = <ContentModel>{};
        $provide.service("ContentModel", () =>  contentModelMock);
    }));
    beforeEach(() => {
        directiveTest = new ComponentTest<TweetContentController>("<tweet-content></tweet-content>", "tweetContent");
    });

    it("should expose the sharedModel", () => {
        var vm: TweetContentController = directiveTest.createComponent({});
        expect(vm.model).toBe(contentModelMock);
    });
});