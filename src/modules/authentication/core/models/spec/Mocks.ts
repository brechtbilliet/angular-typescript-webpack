import {ILoginModel} from "../LoginModel";
import {LoginData} from "../../entities/LoginData";
import {AuthenticationData} from "../../entities/AuthenticationData";
import {RegisterData} from "../../entities/RegisterData";
import {IRegisterModel} from "../RegisterModel";
export interface ILoginModelDeferred {
    login: ng.IDeferred<AuthenticationData>;
}
export class LoginModelMock implements ILoginModel {
    public loginData: LoginData = null;
    public formlyModel: AngularFormly.IFieldGroup = null;
    public deferred: ILoginModelDeferred;
    constructor(private $q: ng.IQService) {
        this.deferred = <ILoginModelDeferred>{};
    }

    public login(): angular.IPromise<AuthenticationData> {
        this.deferred.login = this.$q.defer();
        return this.deferred.login.promise;
    }
}
export interface IRegisterModelDeferred {
    register: ng.IDeferred<AuthenticationData>;
}
export class RegisterModelMock implements IRegisterModel {
    public registerData: RegisterData;
    public formlyModel: AngularFormly.IFieldGroup;
    public deferred: IRegisterModelDeferred;

    public register(): angular.IPromise<AuthenticationData> {
        this.deferred.register = this.$q.defer();
        return this.deferred.register.promise;
    }

    constructor(private $q: ng.IQService) {
        this.deferred = <IRegisterModelDeferred>{};
    }
}