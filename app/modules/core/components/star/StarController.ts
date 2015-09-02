import {IComponentAttributes} from "./StarComponent";

export class StarController implements IComponentAttributes{
    public static $inject: Array<string> = ["$scope"]
    public starred: boolean;
    public toggle(): void {
        this.starred = !this.starred;
    }
}