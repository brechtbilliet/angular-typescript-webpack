import {IAuthenticationService} from "./AuthenticationService";
export interface IAuthenticationLocationCheckService {
    startListening(): void;
}

export class AuthenticationLocationCheckService implements IAuthenticationLocationCheckService {
    public static $inject: Array<string> = ["$rootScope", "$location", "IAuthenticationService"];
    private _$rootScope: ng.IRootScopeService;
    private _$location: ng.ILocationService;
    private _authenticationService: IAuthenticationService;

    constructor($rootScope: ng.IRootScopeService, $location: ng.ILocationService, authenticationService: IAuthenticationService) {
        this._$rootScope = $rootScope;
        this._$location = $location;
        this._authenticationService = authenticationService;
    }

    public startListening(): void {
        this._$rootScope.$on("$locationChangeStart", () => this.locationChanged());
    }

    private locationChanged(): void {
        if (!this._authenticationService.isAuthenticated
            && this._$location.path() !== "/login"
            && this._$location.path() !== "/register") {
            this._$location.path("login");
        }
    }
}