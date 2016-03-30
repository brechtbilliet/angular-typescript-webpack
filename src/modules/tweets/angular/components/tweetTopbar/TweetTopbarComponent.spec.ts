import "angular";
import "angular-mocks";
import "../../index";
import {ComponentTest} from "../../../../util/ComponentTest";
import 'phantomjs-polyfill';
import {TweetTopbarController} from "./TweetTopbarComponent";
import {TopbarModel} from '../../../core/models/impl/TopbarModel';
import {SharedModel} from '../../../core/models/impl/SharedModel';

describe("Component TweetTopbarComponent", () => {
    var directiveTest: ComponentTest<TweetTopbarController>;
    var sharedModelMock: SharedModel;
    var topbarModelMock: TopbarModel;
    beforeEach(angular.mock.module("app.tweets", ($provide: any) => {
        topbarModelMock = <TopbarModel>jasmine.createSpyObj("topbarModel", ["toggleCollapsed", "addTweet"]);
        sharedModelMock = <SharedModel>jasmine.createSpyObj("sharedModel", ["toggleTopbar", "toggleSidebar"]);
        $provide.service("SharedModel", () =>  sharedModelMock);
        $provide.service("TopbarModel", () =>  topbarModelMock);
    }));
    beforeEach(() => {
        directiveTest = new ComponentTest<TweetTopbarController>("<tweet-topbar></tweet-topbar>", "tweetTopbar");
    });

    it("should expose the sharedModel", () => {
        var vm: TweetTopbarController = directiveTest.createComponent({});
        expect(vm.sharedModel).toBe(sharedModelMock);
    });
    it("should expose the topbarModel", () => {
        var vm: TweetTopbarController = directiveTest.createComponent({});
        expect(vm.model).toEqual(topbarModelMock);
    });

    describe("on toggleCollapsed()", () => {
        it("should collapse the topbar", () => {
            var vm: TweetTopbarController = directiveTest.createComponent({});
            vm.toggleCollapsed();
            expect(vm.model.toggleCollapsed).toHaveBeenCalled();
        });
    });
    describe("on post()", () => {
        it("should post a tweet", () => {
            var vm: TweetTopbarController = directiveTest.createComponent({});
            vm.post();
            expect(vm.model.addTweet).toHaveBeenCalled();
        });
    });
});

