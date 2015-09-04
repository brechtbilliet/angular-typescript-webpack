import {ILoginModel} from "../LoginModel";
import {LoginData} from "../../entities/LoginData";
import {AuthenticationData} from "../../entities/AuthenticationData";
export interface ILoginModelDeferred {
    login: ng.IDeferred<AuthenticationData>;
}
export class LoginModelMock implements ILoginModel {
    public loginData: LoginData = null;
    public formlyModel: AngularFormly.IFieldGroup = null;
    public deferred: ILoginModelDeferred;
    private _$q: ng.IQService;

    constructor($q: ng.IQService) {
        this._$q = $q;
        this.deferred = <ILoginModelDeferred>{};
    }

    public login(): angular.IPromise<AuthenticationData> {
        this.deferred.login = this._$q.defer();
        return this.deferred.login.promise;
    }
}
