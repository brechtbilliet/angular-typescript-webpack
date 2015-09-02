import "angular-mocks";
import { IIsolateScope }from "./PageTweetsComponent";
import ComponentTest from "../../../../util/test/ComponentTest";
import {RootModelMock} from "../../models/spec/Mocks";
import {IRootModel} from "../../models/Interfaces";
import PageTweetsController from "./PageTweetsController";

describe("Component PageTweetsComponent", () => {
    var directiveTest: ComponentTest<IIsolateScope, any>;
    var rootModelMock: IRootModel = new RootModelMock();
    beforeEach(angular.mock.module("app.tweets", ($provide: any) => {
        $provide.service("IRootModel", () =>  rootModelMock);

    }));
    beforeEach(() => {
        directiveTest = new ComponentTest<IIsolateScope, Object>("<page-tweets></page-tweets>");
    });

    it("should expose the sharedModel", () => {
        var vm: PageTweetsController = directiveTest.createComponent({}).pageVm;
        expect(vm.sharedModel).toBe(rootModelMock.sharedModel);
    });
});

