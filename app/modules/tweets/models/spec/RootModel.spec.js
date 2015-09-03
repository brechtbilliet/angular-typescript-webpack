/// <reference path="../../../_all.ts" />
var RootModel_1 = require('./RootModel');
var Mocks_1 = require('./Mocks');
describe('model: RootModel', function () {
    var rootModel;
    var sidebarModelMock;
    var topbarModelMock;
    var contentModelMock;
    var sharedModelMock;
    beforeEach(function () {
        sharedModelMock = new Mocks_1.SharedModelMock();
        topbarModelMock = new Mocks_1.TopbarModelMock();
        contentModelMock = new Mocks_1.ContentModelMock();
        sidebarModelMock = new Mocks_1.SidebarModelMock();
        rootModel = new RootModel_1.RootModel(topbarModelMock, sharedModelMock, contentModelMock, sidebarModelMock);
    });
    describe('on initialization', function () {
        it('should expose the sharedModel passed in the constructor', function () {
            expect(rootModel.sharedModel).toBe(sharedModelMock);
        });
        it('should expose the contentModel passed in the constructor', function () {
            expect(rootModel.contentModel).toBe(contentModelMock);
        });
        it('should expose the sidebarModel passed in the constructor', function () {
            expect(rootModel.sidebarModel).toBe(sidebarModelMock);
        });
        it('should expose the topbarModel passed in the constructor', function () {
            expect(rootModel.topbarModel).toBe(topbarModelMock);
        });
    });
});
//# sourceMappingURL=RootModel.spec.js.map