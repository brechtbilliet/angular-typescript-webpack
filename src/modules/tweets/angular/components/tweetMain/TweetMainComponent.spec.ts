import "angular";
import "angular-mocks";
import "../../index";
import {TweetMainController} from "./TweetMainController";
import {ComponentTest} from "../../../../util/ComponentTest";
import {ISharedModel} from "../../../core/models/int/ISharedModel";

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