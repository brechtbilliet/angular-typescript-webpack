import {IAuthenticationService} from "../services/AuthenticationService";
import {AuthenticationData} from "../entities/AuthenticationData";
import "angular-formly";
import {RegisterData} from "../entities/RegisterData";
import {RegisterForm} from "../formly/RegisterForm";

export interface IRegisterModel {
    registerData: RegisterData;
    formlyModel: AngularFormly.IFieldGroup;
    register: () => ng.IPromise<AuthenticationData>;
}

export class RegisterModel implements IRegisterModel {
    public static $inject: Array<string> = ["IAuthenticationService"];
    public registerData: RegisterData;
    public formlyModel: AngularFormly.IFieldGroup;

    private _authenticationService: IAuthenticationService;

    constructor(authenticationService: IAuthenticationService) {
        this._authenticationService = authenticationService;
        this.registerData = new RegisterData("", "", "", "", "");
        this.formlyModel = <AngularFormly.IFieldGroup>{
            model: this.registerData,
            fieldGroup: <Array<AngularFormly.IFieldConfigurationObject>>new RegisterForm().loginFields
        };
    }

    public register(): ng.IPromise<AuthenticationData> {
        return this._authenticationService.register(this.registerData);
    }
}