import "angular";
import "angular-mocks";
import "../../index";
import {ComponentTest} from "../../../../util/ComponentTest";
import 'phantomjs-polyfill';
import {TweetMainController} from "./TweetMainComponent";
import {SharedModel} from '../../../core/models/impl/SharedModel';

describe("Component TweetSidebarComponent", () => {
    var directiveTest: ComponentTest<TweetMainController >;
    var sharedModelMock: SharedModel;
    beforeEach(angular.mock.module("app.tweets", ($provide: any) => {
        sharedModelMock = <SharedModel>{};
        $provide.service("SharedModel", () =>  sharedModelMock);
    }));
    beforeEach(() => {
        directiveTest = new ComponentTest<TweetMainController>("<tweet-main></tweet-main>", "tweetMain");
    });

    it("should expose the sharedModel", () => {
        var vm: TweetMainController = directiveTest.createComponent({});
        expect(vm.sharedModel).toBe(sharedModelMock);
    });
});