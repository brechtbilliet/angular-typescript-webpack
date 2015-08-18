/// <reference path="../../../../_all.ts" />
export default class PageComponent {
    public restrict = 'E';
    public template = require('./index.html');
    public static Factory() {
        var directive = () => {
            return new PageComponent();
        }
        return directive
    }
}