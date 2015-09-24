import "angular";
import "angular-mocks";
import {IAuthenticationService} from "../../services/AuthenticationService";
import {RegisterData} from "../../entities/RegisterData";
import {LoginData} from "../../entities/LoginData";
import {AuthenticationData} from "../../entities/AuthenticationData";
import {ILoginModel} from "../LoginModel";
import {LoginModel} from "../LoginModel";
class AuthenticationServiceMock implements IAuthenticationService {
    constructor(private $q: ng.IQService, private $timeout: ng.ITimeoutService, private $window: ng.IWindowService) {
    }

    public isAuthenticated: boolean;

    public register(registerData: RegisterData): angular.IPromise<AuthenticationData> {
        return this.$q.defer().promise;
    }

    public login(loginData: LoginData): angular.IPromise<AuthenticationData> {
        return this.$q.defer().promise;
    }

    public logout(): void {
    }

    public getAuthenticationData(): AuthenticationData {
        return new AuthenticationData("", "", "");
    }
}
describe("model: loginModel", () => {
    var authenticationServiceMock: IAuthenticationService;
    beforeEach(angular.mock.inject(($q: ng.IQService, $timeout: ng.ITimeoutService, $window: ng.IWindowService) => {
        authenticationServiceMock = new AuthenticationServiceMock($q, $timeout, $window);
    }));
    describe("on creation", () => {
        it("should clear the logindata", () => {
            var loginModel: ILoginModel = new LoginModel(authenticationServiceMock);
            expect(loginModel.loginData.emailAddress).toBe("");
            expect(loginModel.loginData.password).toBe("");
        });
        it("should set the formlyModel", () => {
            var loginModel: ILoginModel = new LoginModel(authenticationServiceMock);
            expect(loginModel.formlyModel.model).toBe(loginModel.loginData);
        });
    });
    describe("When login()", () => {
        it("should do a login request", () => {
            var loginModel: ILoginModel = new LoginModel(authenticationServiceMock);
            spyOn(authenticationServiceMock, "login").and.callThrough();
            loginModel.login();
            expect(authenticationServiceMock.login).toHaveBeenCalledWith(loginModel.loginData);
        });
    });
});