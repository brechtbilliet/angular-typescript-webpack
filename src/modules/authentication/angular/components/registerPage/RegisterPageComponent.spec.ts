import "angular";
import "angular-mocks";
import "angular-route";
import * as toastr from "toastr";
import "../../index";

import {IRegisterPageIsolateScope} from "./RegisterPageComponent";
import {ComponentTest} from "../../../../util/index";
import {RegisterPageController} from "./RegisterPageController";
import {RegisterModelMock} from "../../../../authentication/core/index";
describe("component RegisterPageComponent", () => {
    var directiveTest: ComponentTest<IRegisterPageIsolateScope, any>;
    var registerModelMock: RegisterModelMock;
    var rootScope: ng.IRootScopeService;
    var location: ng.ILocationService;
    var vm: RegisterPageController;
    beforeEach(angular.mock.module("app.authentication", ($provide: any) => {
        $provide.service("IRegisterModel", ($injector: any) => {
            registerModelMock = new RegisterModelMock($injector.get("$q"));
            return registerModelMock;
        });
    }));
    beforeEach(angular.mock.inject(($rootScope: ng.IRootScopeService, $location: ng.ILocationService) => {
        rootScope = $rootScope;
        location = $location;
        directiveTest = new ComponentTest<IRegisterPageIsolateScope, Object>("<register-page></register-page>");
        vm = directiveTest.createComponent({}).pageVm;
    }));

    describe("on load", () => {
        it("should set the registerModel", () => {
            expect(vm.model).toBe(registerModelMock);
        });
    });
    describe("on register()", () => {
        it("should do a register request", () => {
            spyOn(registerModelMock, "register").and.callThrough();
            vm.register();
            expect(registerModelMock.register).toHaveBeenCalled();
        });
        describe("given the call was successfull", () => {
            it("should show an error toast and redirect", () => {
                spyOn(toastr, "success");
                spyOn(location, "path");
                vm.register();
                registerModelMock.deferred.register.resolve();
                rootScope.$digest();
                expect(toastr.success).toHaveBeenCalled();
                expect(location.path).toHaveBeenCalledWith("/");
            });
        });
        describe("given the call failed", () => {
            it("should show an error toast and redirect", () => {
                spyOn(toastr, "error");
                spyOn(location, "path");
                vm.register();
                registerModelMock.deferred.register.reject();
                rootScope.$digest();
                expect(toastr.error).toHaveBeenCalled();
                expect(location.path).toHaveBeenCalledWith("/");
            });
        });
    });

});