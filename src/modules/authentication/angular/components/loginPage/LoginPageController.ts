import {ILoginModel} from "../../../core/index";
export class LoginPageController {
    public static $inject: Array<string> = ["ILoginModel", "$location"];
    public model: ILoginModel;
    private _$location: ng.ILocationService;

    constructor(loginModel: ILoginModel, $location: ng.ILocationService) {
        this.model = loginModel;
        this._$location = $location;
    }

    public login(): void {
        this.model.login().then(() => this.successfullyLoggedIn(), () => this.failedToLogin());
    }

    public successfullyLoggedIn(): void {
        toastr.success("Successfully logged in");
        this._$location.path("/");
    }

    public failedToLogin(): void {
        toastr.error("Failed to log in");
    }
}