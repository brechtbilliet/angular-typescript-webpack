import {AuthenticationData} from "../entities/AuthenticationData";
import {RegisterData} from "../entities/RegisterData";
import {LoginData} from "../entities/LoginData";
export interface IAuthenticationService {
    isAuthenticated: boolean;
    register(registerData: RegisterData): ng.IPromise<AuthenticationData>;
    login(loginData: LoginData): ng.IPromise<AuthenticationData>;
    logout(): void;
    getAuthenticationData(): AuthenticationData;
}

export class AuthenticationService implements IAuthenticationService {
    public static $inject: Array<string> = ["$q", "$timeout", "$window"];
    private _keyAuthenticationData: string = "authenticationdata";
    private _$q: ng.IQService;
    private _$timeout: ng.ITimeoutService;
    private _$window: ng.IWindowService;

    constructor($q: ng.IQService, $timeout: ng.ITimeoutService, $window: ng.IWindowService) {
        this._$q = $q;
        this._$timeout = $timeout;
        this._$window = $window;
    }

    public logout(): void {
        this._$window.localStorage.removeItem(this._keyAuthenticationData);
    }

    public get isAuthenticated(): boolean {
        return this.localStorageKeyExists();
    }

    public getAuthenticationData(): AuthenticationData {
        if (this.localStorageKeyExists()) {
            return JSON.parse(this._$window.localStorage.getItem(this._keyAuthenticationData));
        }
        throw new Error("Authentication data is not available");
    }

    public register(registerData: RegisterData): angular.IPromise<AuthenticationData> {
        var deferred: ng.IDeferred<AuthenticationData> = this._$q.defer<AuthenticationData>();
        this._$timeout(() => {
            deferred.resolve(new AuthenticationData("sfdjsqlfdksfdsf", "testFirstName", "testLastName"));
        }, 1000);
        deferred.promise.then((response: AuthenticationData) => this.setAuthenticationData(response));
        return deferred.promise;
    }

    public login(loginObject: LoginData): angular.IPromise<AuthenticationData> {
        var deferred: ng.IDeferred<AuthenticationData> = this._$q.defer<AuthenticationData>();
        this._$timeout(() => {
            deferred.resolve(new AuthenticationData("sfdjsqlfdksfdsf", "testFirstName", "testLastName"));
        }, 1000);
        deferred.promise.then((response: AuthenticationData) => this.setAuthenticationData(response));
        return deferred.promise;
    }

    private setAuthenticationData(response: AuthenticationData): void {
        this._$window.localStorage.setItem(this._keyAuthenticationData, JSON.stringify(response));
    }

    private localStorageKeyExists(): boolean {
        return this._$window.localStorage.getItem(this._keyAuthenticationData) != null;
    }
}