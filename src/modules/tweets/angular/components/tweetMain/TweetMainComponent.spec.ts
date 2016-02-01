import "angular";
import "angular-mocks";
import "../../index";
import {ComponentTest} from "../../../../util/ComponentTest";
import {ISharedModel} from "../../../core/models/int/ISharedModel";
import 'phantomjs-polyfill';
import {TweetMainController} from "./TweetMainComponent";

describe("Component TweetSidebarComponent", () => {
    var directiveTest: ComponentTest<TweetMainController >;
    var sharedModelMock: ISharedModel;
    beforeEach(angular.mock.module("app.tweets", ($provide: any) => {
        sharedModelMock = <ISharedModel>{};
        $provide.service("ISharedModel", () =>  sharedModelMock);
    }));
    beforeEach(() => {
        directiveTest = new ComponentTest<TweetMainController>("<tweet-main></tweet-main>", "tweetMain");
    });

    it("should expose the sharedModel", () => {
        var vm: TweetMainController = directiveTest.createComponent({});
        expect(vm.sharedModel).toBe(sharedModelMock);
    });
});