import * as toastr from "toastr";
import {IRegisterModel, AuthenticationData} from "../../../core/index";

export class RegisterPageController {
    public static $inject: Array<string> = ["IRegisterModel", "$location"];
    public model: IRegisterModel;
    private _$location: ng.ILocationService;

    constructor(registerModel: IRegisterModel, $location: ng.ILocationService) {
        this.model = registerModel;
        this._$location = $location;
    }

    public register(): void {
        this.model.register().then(
            (response: AuthenticationData) => {
                this.successfullyRegistered(response);
            },
            () => {
                this.failedToRegister();
            }
        );
    }

    private successfullyRegistered(response: AuthenticationData): void {
        toastr.success("test");
        this._$location.path("/");
    }

    private failedToRegister(): void {
        toastr.error("failed");
        this._$location.path("/");
    }
}