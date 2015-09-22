import {IPageModel} from "../../../core/index";
export class PageController {
    public static $inject: Array<string> = ["IPageModel", "$location"];
    private model: IPageModel;
    private _$location: ng.ILocationService;

    constructor(pageModel: IPageModel, $location: ng.ILocationService) {
        this.model = pageModel;
        this._$location = $location;
    }

    public logout(): void {
        this.model.logout();
        this._$location.path("/");
    }
}