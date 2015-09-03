var SidebarModel_1 = require('./SidebarModel');
var Mocks_1 = require('./Mocks');
describe('Model: SidebarModel', function () {
    var sharedModelMock;
    var sidebarModel;
    beforeEach(function () {
        sharedModelMock = new Mocks_1.SharedModelMock();
        sidebarModel = new SidebarModel_1.SidebarModel(sharedModelMock);
    });
    describe('on initialization', function () {
        it('should expose the tweets from the sharedModel passed in the constructor', function () {
            expect(sidebarModel.tweets).toBe(sharedModelMock.tweets);
        });
    });
    describe('on toggleCollapsed()', function () {
        it('should collapse the sidebar', function () {
            spyOn(sharedModelMock, 'toggleSidebar');
            sidebarModel.toggleCollapsed();
            expect(sharedModelMock.toggleSidebar).toHaveBeenCalled();
        });
    });
});
//# sourceMappingURL=SidebarModel.spec.js.map