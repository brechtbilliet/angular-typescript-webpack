/// <reference path="../../../../_all.ts" />
import 'angular-mocks';
import {TweetSidebarComponent,IIsolateScope }from './TweetSidebarComponent';
import ComponentTest from '../../../../util/test/ComponentTest';
import {RootModelMock} from '../../models/Mocks';
import {IRootModel} from '../../models/Interfaces';
describe('Component TweetSidebarComponent', () => {
    var directiveTest:ComponentTest<IIsolateScope, any>;
    var rootModelMock: IRootModel = new RootModelMock();
    beforeEach(angular.mock.module('app.tweets', ($provide)=>{
        $provide.service('IRootModel', () =>  rootModelMock);
    }));
    beforeEach(() => {
        directiveTest = new ComponentTest<IIsolateScope, Object>('<tweet-sidebar></tweet-sidebar>');
    });

    it('should expose the sharedModel', () =>{
        var vm = directiveTest.createComponent({}).sidebarVm;
        expect(vm.sharedModel).toBe(rootModelMock.sharedModel);
    });
    it('should expose the sidebarModel', () =>{
        var vm = directiveTest.createComponent({}).sidebarVm;
        expect(vm.model).toEqual(rootModelMock.sidebarModel);
    });

    describe('on toggleCollapsed()', function(){
        it('should collapse the sidebar', function(){
            var vm = directiveTest.createComponent({}).sidebarVm;
            spyOn(rootModelMock.sidebarModel, 'toggleCollapsed');
            vm.toggleCollapsed();
            expect(vm.model.toggleCollapsed).toHaveBeenCalled();
        });
    });
});

