import "../../index";
import "angular";
import "angular-mocks";
import {ComponentTest} from "../../../../util/ComponentTest";
import 'phantomjs-polyfill';
import {PageTweetsController} from "./PageTweetsComponent";
import {SharedModel} from '../../../core/models/impl/SharedModel';
describe("Component PageTweetsComponent", () => {
    var directiveTest: ComponentTest<PageTweetsController>;
    var sharedModelMock: SharedModel;
    beforeEach(angular.mock.module("app.tweets", ($provide: any) => {
        sharedModelMock = <SharedModel>{};
        $provide.service("SharedModel", () =>  sharedModelMock);
    }));
    beforeEach(() => {
        directiveTest = new ComponentTest<PageTweetsController>("<page-tweets></page-tweets>", "pageTweets");
    });

    it("should expose the sharedModel", () => {
        var vm: PageTweetsController = directiveTest.createComponent({});
        expect(vm.sharedModel).toBe(sharedModelMock);
    });
});