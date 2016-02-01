import "../../index";
import "angular";
import "angular-mocks";
import {ComponentTest} from "../../../../util/ComponentTest";
import {StarController} from "./StarComponent";
import 'phantomjs-polyfill';

describe("Component StarComponent", () => {
    var directiveTest: ComponentTest<StarController>;
    beforeEach(angular.mock.module("app.application"));
    beforeEach(() => {
        directiveTest = new ComponentTest<StarController>("<star starred=\"starred\"></star>", "star");
    });

    describe("the passed starred value is false", () => {
        it("it should set the default starred value to false", () => {
            var attributes: any = { starred: false };
            var vm: StarController = directiveTest.createComponent(attributes);
            expect(vm.starred).toBe(false);
        });
        it("should update the ui accordingly", () => {
            var attributes: any = { starred: false };
            var vm: StarController = directiveTest.createComponent(attributes);
            expect(directiveTest.element.find("i").hasClass("starred")).toBe(false);
            vm.toggle();
            directiveTest.scope.$digest();
            expect(directiveTest.element.find("i").hasClass("starred")).toBe(true);

        });
    });
    describe("when the passed starred value is true", () => {
        it("should set the default starred value to true", () => {
            var attributes: any = { starred: true };
            var vm: StarController = directiveTest.createComponent(attributes);

            expect(vm.starred).toBe(true);
        });
    });
    describe("when toggle()", () => {
        it("should toggle the starred property", () => {
            var attributes: any = { starred: false };
            var vm: StarController = directiveTest.createComponent(attributes);

            vm.toggle();
            expect(vm.starred).toBe(true);
            vm.toggle();
            expect(vm.starred).toBe(false);
        });
        it("should update the ui accordingly", () => {
            var attributes: any = { starred: false };
            var vm: StarController = directiveTest.createComponent(attributes);

            vm.toggle();
            directiveTest.scope.$digest();
            expect(directiveTest.element.find("i").hasClass("starred")).toBe(true);

            vm.toggle();
            directiveTest.scope.$digest();
            expect(directiveTest.element.find("i").hasClass("starred")).toBe(false);
        });
    });
});

