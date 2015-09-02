export default class ComponentTest<TComponentScope extends ng.IScope, TAttributes> {
    public scope: TComponentScope;
    public element: ng.IAugmentedJQuery;
    public isolateScope: TComponentScope;

    private _template: string;
    private _$rootScope: ng.IScope;
    private _$compile: ng.ICompileService;

    constructor(template: string) {
        this._template = template;
        angular.mock.inject(($rootScope, $compile) => {
            this._$rootScope = $rootScope;
            this._$compile = $compile;
        });
    }

    public createComponent(attributes: TAttributes): TComponentScope {
        this.scope = <TComponentScope>this._$rootScope.$new();
        for (var key in attributes) {
            this.scope[key] = attributes[key];
        }
        this.element = this._$compile(this._template)(this.scope);
        this.scope.$digest();
        this.isolateScope = <TComponentScope>this.element.isolateScope();
        if (this.isolateScope != null) {
            return this.isolateScope;
        }
        return this.scope;
    }
}