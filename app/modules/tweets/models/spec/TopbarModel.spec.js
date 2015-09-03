var TopbarModel_1 = require('./TopbarModel');
var Mocks_1 = require('./Mocks');
describe('Model: TopbarModel', function () {
    var sharedModelMock;
    var topbarModel;
    beforeEach(function () {
        sharedModelMock = new Mocks_1.SharedModelMock();
        topbarModel = new TopbarModel_1.TopbarModel(sharedModelMock);
    });
    describe('on toggleCollapsed()', function () {
        it('should collapse the topbar', function () {
            spyOn(sharedModelMock, 'toggleTopbar');
            topbarModel.toggleCollapsed();
            expect(sharedModelMock.toggleTopbar).toHaveBeenCalled();
        });
    });
    describe('on addTweet', function () {
        it('should add a tweet', function () {
            topbarModel.tweetContent = '';
            var originalLength = sharedModelMock.tweets.length;
            topbarModel.addTweet();
            expect(sharedModelMock.tweets.length).toBe(originalLength + 1);
        });
    });
});
//# sourceMappingURL=TopbarModel.spec.js.map