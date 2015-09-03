/// <reference path="../../../_all.ts" />
var ContentModel_1 = require('./ContentModel');
var Mocks_1 = require('./Mocks');
describe('model: ContentModel', function () {
    describe('on initialization', function () {
        it('should expose the tweets passed from the sharedModel', function () {
            var sharedModel = new Mocks_1.SharedModelMock();
            var contentModel = new ContentModel_1.ContentModel(sharedModel);
            expect(contentModel.tweets).toBe(sharedModel.tweets);
        });
    });
});
//# sourceMappingURL=ContentModel.spec.js.map