export class PageAboutComponent implements ng.IComponentOptions {
    public template: string = `
    <div class="container-fluid">
        <h1><i class="fa fa-info-circle"></i>&nbsp;About</h1>
        This architecture is written By <a href="http://brecht.io">Brecht Billiet</a> to help you set up a largescale project with:
        <ul>
            <li>Typescript</li>
            <li>Webpack</li>
            <li>Angular 1.4</li>
            <li>Karma</li>
            <li>Jasmine</li>
            <li>Istanbul coverage</li>
        </ul>
    </div>`;
}