import "angular-mocks";
import {ITweetMainIsolateScope} from "./TweetMainComponent";
import {ComponentTest} from "../../../../util/index";
import {IRootModel, RootModelMock} from "../../../core/index";
import {TweetMainController} from "./TweetMainController";

describe("Component TweetSidebarComponent", () => {
    var directiveTest: ComponentTest<ITweetMainIsolateScope , any>;
    var rootModelMock: IRootModel = new RootModelMock();
    beforeEach(angular.mock.module("app.tweets", ($provide: any) => {
        $provide.service("IRootModel", () =>  rootModelMock);
    }));
    beforeEach(() => {
        directiveTest = new ComponentTest<ITweetMainIsolateScope , Object>("<tweet-main></tweet-main>");
    });

    it("should expose the sharedModel", () => {
        var vm: TweetMainController = directiveTest.createComponent({}).mainVm;
        expect(vm.sharedModel).toBe(rootModelMock.sharedModel);
    });
});