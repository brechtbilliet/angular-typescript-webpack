import "angular-mocks";
import { IIsolateScope }from "./TweetContentComponent";
import ComponentTest from "../../../../util/test/ComponentTest";
import {RootModelMock} from "../../models/spec/Mocks";
import TweetContentController from "./TweetContentController";
describe("Component TweetContentComponent", () => {
    var directiveTest: ComponentTest<IIsolateScope, any>;
    var rootModelMock = new RootModelMock();
    beforeEach(angular.mock.module("app.tweets", ($provide: any) => {
        $provide.service("IRootModel", () =>  rootModelMock);
    }));
    beforeEach(() => {
        directiveTest = new ComponentTest<IIsolateScope, Object>("<tweet-content></tweet-content>");
    });

    it("should expose the sharedModel", () => {
        var vm: TweetContentController = directiveTest.createComponent({}).contentVm;
        expect(vm.model).toBe(rootModelMock.contentModel);
    });

});

