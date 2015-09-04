import "angular-mocks";
import {IIsolateScope}from "./TweetMainComponent";
import {ComponentTest} from "../../../../util/test/ComponentTest";
import {RootModelMock} from "../../models/spec/Mocks";
import {IRootModel} from "../../models/Interfaces";
import {TweetMainController} from "./TweetMainController";
describe("Component TweetSidebarComponent", () => {
    var directiveTest: ComponentTest<IIsolateScope, any>;
    var rootModelMock: IRootModel = new RootModelMock();
    beforeEach(angular.mock.module("app.tweets", ($provide: any) => {
        $provide.service("IRootModel", () =>  rootModelMock);
    }));
    beforeEach(() => {
        directiveTest = new ComponentTest<IIsolateScope, Object>("<tweet-main></tweet-main>");
    });

    it("should expose the sharedModel", () => {
        var vm: TweetMainController = directiveTest.createComponent({}).mainVm;
        expect(vm.sharedModel).toBe(rootModelMock.sharedModel);
    });
});