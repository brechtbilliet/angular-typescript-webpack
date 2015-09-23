import {ISharedModel} from "./../Interfaces";
import {ITweetService} from "../../services/Interfaces";
import {SharedModel} from "./../SharedModel";
import {TweetServiceMock} from "../../services/Mocks";
describe("model: SharedModel", () => {
    var tweetServiceMock: ITweetService;
    var sharedModel: ISharedModel;
    beforeEach(() => {
        tweetServiceMock = new TweetServiceMock();
        sharedModel = new SharedModel(tweetServiceMock);
    })
    describe("on initialization", () => {
        it("should set the topbarCollapsed property to false by default", () => {
            expect(sharedModel.topbarCollapsed).toBe(false);
        });

        it("should set the sidebarCollapsed property to false by default", () => {
            expect(sharedModel.sidebarCollapsed).toBe(false);
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