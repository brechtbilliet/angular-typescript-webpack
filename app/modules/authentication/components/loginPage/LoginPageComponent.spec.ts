import "angular-mocks";
import * as toastr from "toastr";

import {ILoginPageIsolateScope} from "./LoginPageComponent";
import {ComponentTest} from "../../../../util/test/ComponentTest";
import {LoginModelMock} from "../../models/spec/Mocks";
import {LoginPageController} from "./LoginPageController";
describe("component LoginPageComponent", () => {
    var directiveTest: ComponentTest<ILoginPageIsolateScope, any>;
    var loginModelMock: LoginModelMock;
    var rootScope: ng.IRootScopeService;
    var location: ng.ILocationService;
    var vm: LoginPageController;
    beforeEach(angular.mock.module("app.authentication", ($provide: any) => {
        $provide.service("ILoginModel", ($injector: any) => {
            loginModelMock = new LoginModelMock($injector.get("$q"));
            return loginModelMock;
        });
    }));
    beforeEach(angular.mock.inject(($rootScope: ng.IRootScopeService, $location: ng.ILocationService) => {
        rootScope = $rootScope;
        location = $location;
        directiveTest = new ComponentTest<ILoginPageIsolateScope, Object>("<login-page></login-page>");
        vm = directiveTest.createComponent({}).pageVm;
    }));
    describe("on initialization", () => {
        it("should expose the loginModel", () => {
            expect(vm.model).toBe(loginModelMock);
        });
    });
    describe("on login", () => {
        it("should do a login call", () => {
            spyOn(vm.model, "login").and.callThrough();
            vm.login();
            expect(vm.model.login).toHaveBeenCalled();
        });
        describe("given the login call was successfull", () => {
            it("should show a successtoast", () => {
                vm.login();
                spyOn(toastr, "success");
                loginModelMock.deferred.login.resolve();
                rootScope.$digest();
                expect(toastr.success).toHaveBeenCalled();
            });
            it("should redirect to the basepath", () => {
                vm.login();
                spyOn(location, "path");
                loginModelMock.deferred.login.resolve();
                rootScope.$digest();
                expect(location.path).toHaveBeenCalledWith("/");
            });
        });
        describe("given the login was unsuccessfull", () => {
            it("should show an error toast", () => {
                vm.login();
                spyOn(toastr, "error");
                loginModelMock.deferred.login.reject();
                rootScope.$digest();
                expect(toastr.error).toHaveBeenCalled();
            });
        });
    });
});