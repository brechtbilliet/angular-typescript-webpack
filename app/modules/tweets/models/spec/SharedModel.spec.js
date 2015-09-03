var SharedModel_1 = require('./SharedModel');
var Mocks_1 = require('../services/Mocks');
describe('model: SharedModel', function () {
    var tweetServiceMock;
    var sharedModel;
    beforeEach(function () {
        tweetServiceMock = new Mocks_1.TweetServiceMock();
        sharedModel = new SharedModel_1.SharedModel(tweetServiceMock);
    });
    describe('on initialization', function () {
        it('should set the topbarCollapsed property to false by default', function () {
            expect(sharedModel.topbarCollapsed).toBe(false);
        });
        it('should set the sidebarCollapsed property to false by default', function () {
            expect(sharedModel.sidebarCollapsed).toBe(false);
        });
    });
    describe('When toggleTopbar()', function () {
        it('should collapse the topbar', function () {
            sharedModel.toggleTopbar();
            expect(sharedModel.topbarCollapsed).toBe(true);
            sharedModel.toggleTopbar();
            expect(sharedModel.topbarCollapsed).toBe(false);
        });
    });
    describe('When toggleSidebar()', function () {
        it('should collapse the sidebar', function () {
            sharedModel.toggleSidebar();
            expect(sharedModel.sidebarCollapsed).toBe(true);
            sharedModel.toggleSidebar();
            expect(sharedModel.sidebarCollapsed).toBe(false);
        });
    });
});
//# sourceMappingURL=SharedModel.spec.js.map