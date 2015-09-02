import "angular-mocks";
import {IIsolateScope}from "./TweetSidebarComponent";
import ComponentTest from "../../../../util/test/ComponentTest";
import {RootModelMock} from "../../models/spec/Mocks";
import {IRootModel} from "../../models/Interfaces";
describe("Component TweetSidebarComponent", () => {
    var directiveTest: ComponentTest<IIsolateScope, any>;
    var rootModelMock: IRootModel = new RootModelMock();
    beforeEach(angular.mock.module("app.tweets", ($provide: any) => {
        $provide.service("IRootModel", () =>  rootModelMock);
    }));
    beforeEach(() => {
        directiveTest = new ComponentTest<IIsolateScope, Object>("<tweet-sidebar></tweet-sidebar>");
    });

    it("should expose the sharedModel", () => {
        var vm = directiveTest.createComponent({}).sidebarVm;
        expect(vm.sharedModel).toBe(rootModelMock.sharedModel);
    });
    it("should expose the sidebarModel", () => {
        var vm = directiveTest.createComponent({}).sidebarVm;
        expect(vm.model).toEqual(rootModelMock.sidebarModel);
    });

    describe("on toggleCollapsed()", () => {
        it("should collapse the sidebar", () => {
            var vm = directiveTest.createComponent({}).sidebarVm;
            spyOn(rootModelMock.sidebarModel, "toggleCollapsed");
            vm.toggleCollapsed();
            expect(vm.model.toggleCollapsed).toHaveBeenCalled();
        });
    });
});

