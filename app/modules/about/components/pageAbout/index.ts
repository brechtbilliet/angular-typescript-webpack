/// <reference path="../../../../_all.ts" />
export class PageAboutComponent {
    public restrict = 'E';
    public template = require('./index.html');

    public static Factory() {
        var directive = () => {
            return new PageAboutComponent();
        }
        return directive
    }
}