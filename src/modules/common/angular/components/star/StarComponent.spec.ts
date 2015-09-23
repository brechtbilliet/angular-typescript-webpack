import "angular-mocks";
import {IStarIsolateScope, IComponentAttributes} from "./StarComponent";
import {ComponentTest} from "../../../../util/index";
import {StarController} from "./StarController";

describe("Component StarComponent", () => {
    var directiveTest: ComponentTest<IStarIsolateScope, IComponentAttributes>;
    beforeEach(angular.mock.module("app.common"));
    beforeEach(() => {
        directiveTest = new ComponentTest<IStarIsolateScope, IComponentAttributes>("<star starred=\"starred\"></star>");
    });

    describe("the passed starred value is false", () => {
        it("it should set the default starred value to false", () => {
            var attributes: IComponentAttributes = { starred: false };
            var vm: StarController = directiveTest.createComponent(attributes).starVm;
            expect(vm.starred).toBe(false);
        });
        it("should update the ui accordingly", () => {
            var attributes: IComponentAttributes = { starred: false };
            var vm: StarController = directiveTest.createComponent(attributes).starVm;
            expect(directiveTest.element.find("i").hasClass("starred")).toBe(false);
            vm.toggle();
            directiveTest.scope.$digest();
            expect(directiveTest.element.find("i").hasClass("starred")).toBe(true);

        });
    });
    describe("when the passed starred value is true", () => {
        it("should set the default starred value to true", () => {
            var attributes: IComponentAttributes = { starred: true };
            var vm: StarController = directiveTest.createComponent(attributes).starVm;

            expect(vm.starred).toBe(true);
        });
    });
    describe("when toggle()", () => {
        it("should toggle the starred property", () => {
            var attributes: IComponentAttributes = { starred: false };
            var vm: StarController = directiveTest.createComponent(attributes).starVm;

            vm.toggle();
            expect(vm.starred).toBe(true);
            vm.toggle();
            expect(vm.starred).toBe(false);
        });
        it("should update the ui accordingly", () => {
            var attributes: IComponentAttributes = { starred: false };
            var vm: StarController = directiveTest.createComponent(attributes).starVm;

            vm.toggle();
            directiveTest.scope.$digest();
            expect(directiveTest.element.find("i").hasClass("starred")).toBe(true);

            vm.toggle();
            directiveTest.scope.$digest();
            expect(directiveTest.element.find("i").hasClass("starred")).toBe(false);
        });
    });
});

