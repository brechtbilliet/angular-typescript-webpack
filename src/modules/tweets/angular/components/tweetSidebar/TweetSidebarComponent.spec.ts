import "angular";
import "angular-mocks";
import "../../index";
import {ComponentTest} from "../../../../util/ComponentTest";
import 'phantomjs-polyfill';
import {TweetSidebarController} from "./TweetSidebarComponent";
import {SharedModel} from '../../../core/models/impl/SharedModel';
import {SidebarModel} from '../../../core/models/impl/SidebarModel';

describe("Component TweetSidebarComponent", () => {
    var directiveTest: ComponentTest<TweetSidebarController>;
    var sharedModelMock: SharedModel;
    var sidebarModelMock: SidebarModel;
    beforeEach(angular.mock.module("app.tweets", ($provide: any) => {
        sidebarModelMock = <SidebarModel>jasmine.createSpyObj("sidebarModel", ["toggleCollapsed"]);
        sharedModelMock = <SharedModel>jasmine.createSpyObj("sharedModel", ["toggletopbar", "toggleSidebar"]);
        $provide.service("SharedModel", () =>  sharedModelMock);
        $provide.service("SidebarModel", () =>  sidebarModelMock);
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

