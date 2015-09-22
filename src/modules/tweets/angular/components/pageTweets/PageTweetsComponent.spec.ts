import "angular-mocks";
import {ComponentTest} from "../../../../util/index";
import {IPageTweetsIsolateScope} from "./PageTweetsComponent";
import {IRootModel, RootModelMock} from "../../../core/index";
import {PageTweetsController} from "./PageTweetsController";

describe("Component PageTweetsComponent", () => {
    var directiveTest: ComponentTest<IPageTweetsIsolateScope, any>;
    var rootModelMock: IRootModel = new RootModelMock();
    beforeEach(angular.mock.module("app.tweets", ($provide: any) => {
        $provide.service("IRootModel", () =>  rootModelMock);
    }));
    beforeEach(() => {
        directiveTest = new ComponentTest<IPageTweetsIsolateScope, Object>("<page-tweets></page-tweets>");
    });

    it("should expose the sharedModel", () => {
        var vm: PageTweetsController = directiveTest.createComponent({}).pageVm;
        expect(vm.sharedModel).toBe(rootModelMock.sharedModel);
    });
});