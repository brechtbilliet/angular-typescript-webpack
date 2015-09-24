import "../../index";
import "angular";
import "angular-mocks";
import {ComponentTest} from "../../../../util/index";
import {ITweetContentIsolateScope} from "./TweetContentComponent";
import {IRootModel, RootModelMock} from "../../../core/index";
import {TweetContentController} from "./TweetContentController";

describe("Component TweetContentComponent", () => {
    var directiveTest: ComponentTest<ITweetContentIsolateScope, any>;
    var rootModelMock: IRootModel = new RootModelMock();
    beforeEach(angular.mock.module("app.tweets", ($provide: any) => {
        $provide.service("IRootModel", () =>  rootModelMock);
    }));
    beforeEach(() => {
        directiveTest = new ComponentTest<ITweetContentIsolateScope, Object>("<tweet-content></tweet-content>");
    });

    it("should expose the sharedModel", () => {
        var vm: TweetContentController = directiveTest.createComponent({}).contentVm;
        expect(vm.model).toBe(rootModelMock.contentModel);
    });
});