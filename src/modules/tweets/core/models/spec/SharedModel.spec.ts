import {SharedModel} from "../impl/SharedModel";
import {Tweet} from "../../entities/Tweet";
import Spy = jasmine.Spy;
import {TweetService} from '../../services/impl/TweetService';
describe("model: SharedModel", () => {
    var tweetServiceMock: TweetService;
    var sharedModel: SharedModel;
    var getAllResult: Array<Tweet> = [new Tweet("@test", "test", false)];
    beforeEach(() => {
        tweetServiceMock = jasmine.createSpyObj("TweetService", ["getAll"]);
        (<Spy>tweetServiceMock.getAll).and.returnValue(getAllResult);
        sharedModel = new SharedModel(tweetServiceMock);
    });
    describe("on initialization", () => {
        it("should set the topbarCollapsed property to false by default", () => {
            expect(sharedModel.topbarCollapsed).toBe(false);
        });

        it("should set the sidebarCollapsed property to false by default", () => {
            expect(sharedModel.sidebarCollapsed).toBe(false);
        });
        it("should get the tweets from the service", () => {
            expect(sharedModel.tweets).toBe(getAllResult);
        });
    });
    describe("When toggleTopbar()", () => {
        it("should collapse the topbar", () => {
            sharedModel.toggleTopbar();
            expect(sharedModel.topbarCollapsed).toBe(true);
            sharedModel.toggleTopbar();
            expect(sharedModel.topbarCollapsed).toBe(false);
        });
    });

    describe("When toggleSidebar()", () => {
        it("should collapse the sidebar", () => {
            sharedModel.toggleSidebar();
            expect(sharedModel.sidebarCollapsed).toBe(true);
            sharedModel.toggleSidebar();
            expect(sharedModel.sidebarCollapsed).toBe(false);
        });
    });
});