import {SidebarModel} from "../impl/SidebarModel";
import {SharedModel} from '../impl/SharedModel';
describe("Model: SidebarModel", () => {
    var sharedModelMock: SharedModel;
    var sidebarModel: SidebarModel;
    beforeEach(() => {
        sharedModelMock = jasmine.createSpyObj("sharedModel", ["toggleTopbar", "toggleSidebar"]);
        sharedModelMock.tweets = [];
        sharedModelMock.sidebarCollapsed = false;
        sharedModelMock.topbarCollapsed = false;
        sidebarModel = new SidebarModel(sharedModelMock);
    });
    describe("on initialization", () => {
        it("should expose the tweets from the sharedModel passed in the constructor", () => {
            expect(sidebarModel.tweets).toBe(sharedModelMock.tweets);
        });
    });
    describe("on toggleCollapsed()", () => {
        it("should collapse the sidebar", () => {
            sidebarModel.toggleCollapsed();
            expect(sharedModelMock.toggleSidebar).toHaveBeenCalled();
        });
    });
});