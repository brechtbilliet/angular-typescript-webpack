import "angular-mocks";
import {ITweetSidebarIsolateScope} from "./TweetSidebarComponent";
import {ComponentTest} from "../../../../util/index";
import {IRootModel, RootModelMock} from "../../../core/index";
import {TweetSidebarController} from "./TweetSidebarController";

describe("Component TweetSidebarComponent", () => {
    var directiveTest: ComponentTest<ITweetSidebarIsolateScope, any>;
    var rootModelMock: IRootModel = new RootModelMock();
    beforeEach(angular.mock.module("app.tweets", ($provide: any) => {
        $provide.service("IRootModel", () =>  rootModelMock);
    }));
    beforeEach(() => {
        directiveTest = new ComponentTest<ITweetSidebarIsolateScope, Object>("<tweet-sidebar></tweet-sidebar>");
    });

    it("should expose the sharedModel", () => {
        var vm: TweetSidebarController = directiveTest.createComponent({}).sidebarVm;
        expect(vm.sharedModel).toBe(rootModelMock.sharedModel);
    });
    it("should expose the sidebarModel", () => {
        var vm: TweetSidebarController = directiveTest.createComponent({}).sidebarVm;
        expect(vm.model).toEqual(rootModelMock.sidebarModel);
    });

    describe("on toggleCollapsed()", () => {
        it("should collapse the sidebar", () => {
            var vm: TweetSidebarController = directiveTest.createComponent({}).sidebarVm;
            spyOn(rootModelMock.sidebarModel, "toggleCollapsed");
            vm.toggleCollapsed();
            expect(vm.model.toggleCollapsed).toHaveBeenCalled();
        });
    });
});

