import * as toastr from "toastr";
import {IRegisterModel, AuthenticationData} from "../../../core/index";

export class RegisterPageController {
    public static $inject: Array<string> = ["IRegisterModel", "$location"];
    public model: IRegisterModel;

    constructor(registerModel: IRegisterModel, private $location: ng.ILocationService) {
        this.model = registerModel;
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
        this.$location.path("/");
    }

    private failedToRegister(): void {
        toastr.error("failed");
        this.$location.path("/");
    }
}