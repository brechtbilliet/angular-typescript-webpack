import {IAuthenticationService} from "../services/AuthenticationService";
import {AuthenticationData} from "../entities/AuthenticationData";
import "angular-formly";
import {LoginForm} from "../formly/LoginForm";
import {LoginData} from "../entities/LoginData";

export interface ILoginModel {
    loginData: LoginData;
    formlyModel: AngularFormly.IFieldGroup;
    login: () => ng.IPromise<AuthenticationData>;
}
export class LoginModel implements ILoginModel {
    public static $inject: Array<string> = ["IAuthenticationService"];
    public loginData: LoginData;
    public formlyModel: AngularFormly.IFieldGroup;

    constructor(authenticationService: IAuthenticationService) {
        this._authenticationService = authenticationService;
        this.loginData = new LoginData("", "");
        this.formlyModel = <AngularFormly.IFieldGroup>{
            model: this.loginData,
            fieldGroup: <Array<AngularFormly.IFieldConfigurationObject>>new LoginForm().loginFields
        };
    }

    private _authenticationService: IAuthenticationService;

    public login(): ng.IPromise<AuthenticationData> {
        return this._authenticationService.login(this.loginData);
    }
}