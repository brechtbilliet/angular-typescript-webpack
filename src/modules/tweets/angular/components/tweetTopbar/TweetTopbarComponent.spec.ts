import "angular";
import "angular-mocks";
import "../../index";
import {ITweetTopbarIsolateScope} from "./TweetTopbarComponent";
import {ComponentTest} from "../../../../util/index";
import {IRootModel, RootModelMock} from "../../../core/index";
import {TweetTopbarController} from "./TweetTopbarController";

describe("Component TweetTopbarComponent", () => {
    var directiveTest: ComponentTest<ITweetTopbarIsolateScope, any>;
    var rootModelMock: IRootModel = new RootModelMock();
    beforeEach(angular.mock.module("app.tweets", ($provide: any) => {
        $provide.service("IRootModel", () =>  rootModelMock);
    }));
    beforeEach(() => {
        directiveTest = new ComponentTest<ITweetTopbarIsolateScope, Object>("<tweet-topbar></tweet-topbar>");
    });

    it("should expose the sharedModel", () => {
        var vm: TweetTopbarController = directiveTest.createComponent({}).topbarVm;
        expect(vm.sharedModel).toBe(rootModelMock.sharedModel);
    });
    it("should expose the topbarModel", () => {
        var vm: TweetTopbarController = directiveTest.createComponent({}).topbarVm;
        expect(vm.model).toEqual(rootModelMock.topbarModel);
    });

    describe("on toggleCollapsed()", () => {
        it("should collapse the topbar", () => {
            var vm: TweetTopbarController = directiveTest.createComponent({}).topbarVm;
            spyOn(rootModelMock.topbarModel, "toggleCollapsed");
            vm.toggleCollapsed();
            expect(vm.model.toggleCollapsed).toHaveBeenCalled();
        });
    });
    describe("on post()", () => {
        it("should post a tweet", () => {
            var vm: TweetTopbarController = directiveTest.createComponent({}).topbarVm;
            spyOn(rootModelMock.topbarModel, "addTweet");
            vm.post();
            expect(vm.model.addTweet).toHaveBeenCalled();
        });
    });
});

