import {IComponentAttributes} from "./StarComponent";

export class StarController implements IComponentAttributes{
    public starred: boolean;
    public toggle(): void {
        this.starred = !this.starred;
    }
}