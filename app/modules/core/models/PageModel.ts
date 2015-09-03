import {IAuthenticationService} from "../../authentication/services/AuthenticationService";
export interface IPageModel {
    isAuthenticated: boolean;
    logout(): void;
}

export class PageModel implements IPageModel {
    public static $inject: Array<string> = ["IAuthenticationService"];
    private _authenticationService: IAuthenticationService;

    public logout(): void {
        this._authenticationService.logout();
    }
    public get isAuthenticated(): boolean {
        return this._authenticationService.isAuthenticated;
    }

    constructor(authenticationService: IAuthenticationService) {
        this._authenticationService = authenticationService;
    }
}