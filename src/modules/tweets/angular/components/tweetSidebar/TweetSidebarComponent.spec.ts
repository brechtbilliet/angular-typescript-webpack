import "angular";
import "angular-mocks";
import "../../index";
import {ComponentTest} from "../../../../util/ComponentTest";
import {ISidebarModel} from "../../../core/models/int/ISidebarModel";
import {ISharedModel} from "../../../core/models/int/ISharedModel";
import 'phantomjs-polyfill';
import {TweetSidebarController} from "./TweetSidebarComponent";

describe("Component TweetSidebarComponent", () => {
    var directiveTest: ComponentTest<TweetSidebarController>;
    var sharedModelMock: ISharedModel;
    var sidebarModelMock: ISidebarModel;
    beforeEach(angular.mock.module("app.tweets", ($provide: any) => {
        sidebarModelMock = <ISidebarModel>jasmine.createSpyObj("sidebarModel", ["toggleCollapsed"]);
        sharedModelMock = <ISharedModel>jasmine.createSpyObj("sharedModel", ["toggletopbar", "toggleSidebar"]);
        $provide.service("ISharedModel", () =>  sharedModelMock);
        $provide.service("ISidebarModel", () =>  sidebarModelMock);
    }));
    beforeEach(() => {
        directiveTest = new ComponentTest<TweetSidebarController>("<tweet-sidebar></tweet-sidebar>", "tweetSidebar");
    });

    it("should expose the sharedModel", () => {
        var vm: TweetSidebarController = directiveTest.createComponent({});
        expect(vm.sharedModel).toBe(sharedModelMock);
    });
    it("should expose the sidebarModel", () => {
        var vm: TweetSidebarController = directiveTest.createComponent({});
        expect(vm.model).toEqual(sidebarModelMock);
    });

    describe("on toggleCollapsed()", () => {
        it("should collapse the sidebar", () => {
            var vm: TweetSidebarController = directiveTest.createComponent({});
            vm.toggleCollapsed();
            expect(vm.model.toggleCollapsed).toHaveBeenCalled();
        });
    });
});

