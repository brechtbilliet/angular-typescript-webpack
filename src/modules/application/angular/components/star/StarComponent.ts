const template: string = require('./StarComponent.html');
export class StarComponent implements ng.IComponentOptions {
    public bindings: any = {
        starred: "="
    };
    public controller: Function = StarController;
    public template: string = template;
}
export class StarController {
    public starred: boolean;

    public toggle(): void {
        this.starred = !this.starred;
    }
}
