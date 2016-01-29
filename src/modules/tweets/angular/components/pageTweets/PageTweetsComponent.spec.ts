import "../../index";
import "angular";
import "angular-mocks";
import {PageTweetsController} from "./PageTweetsController";
import {ComponentTest} from "../../../../util/ComponentTest";
import {ISharedModel} from "../../../core/models/int/ISharedModel";

describe("Component PageTweetsComponent", () => {
    var directiveTest: ComponentTest<PageTweetsController>;
    var sharedModelMock: ISharedModel;
    beforeEach(angular.mock.module("app.tweets", ($provide: any) => {
        sharedModelMock = <ISharedModel>{};
        $provide.service("ISharedModel", () =>  sharedModelMock);
    }));
    beforeEach(() => {
        directiveTest = new ComponentTest<PageTweetsController>("<page-tweets></page-tweets>", "pageTweets");
    });

    it("should expose the sharedModel", () => {
        var vm: PageTweetsController = directiveTest.createComponent({});
        expect(vm.sharedModel).toBe(sharedModelMock);
    });
});