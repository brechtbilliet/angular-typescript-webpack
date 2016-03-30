import {TopbarModel} from "../impl/TopbarModel";
import {SharedModel} from '../impl/SharedModel';
describe("Model: TopbarModel", () => {
    var sharedModelMock: SharedModel;
    var topbarModel: TopbarModel;
    beforeEach(() => {
        sharedModelMock = jasmine.createSpyObj("sharedModel", ["toggleTopbar", "toggleSidebar"]);
        sharedModelMock.tweets = [];
        sharedModelMock.sidebarCollapsed = false;
        sharedModelMock.topbarCollapsed = false;
        topbarModel = new TopbarModel(sharedModelMock);
    });
    describe("on toggleCollapsed()", () => {
        it("should collapse the topbar", () => {
            topbarModel.toggleCollapsed();
            expect(sharedModelMock.toggleTopbar).toHaveBeenCalled();
        });
    });
    describe("on addTweet", () => {
        it("should add a tweet", () => {
            topbarModel.tweetContent = "";
            var originalLength: number = sharedModelMock.tweets.length;
            topbarModel.addTweet();
            expect(sharedModelMock.tweets.length).toBe(originalLength + 1);
        });
    });
});