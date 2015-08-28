/// <reference path="../../../../_all.ts" />
import 'angular-mocks';
import {TweetTopbarComponent,IIsolateScope }from './TweetTopbarComponent';
import ComponentTest from '../../../../util/test/ComponentTest';
import {RootModelMock} from '../../models/Mocks';
import {IRootModel} from '../../models/Interfaces';
describe('Component TweetTopbarComponent', () => {
    var directiveTest:ComponentTest<IIsolateScope, any>;
    var rootModelMock: IRootModel = new RootModelMock();
    beforeEach(angular.mock.module('app.tweets', ($provide)=>{
        $provide.service('IRootModel', () =>  rootModelMock);
    }));
    beforeEach(() => {
        directiveTest = new ComponentTest<IIsolateScope, Object>('<tweet-topbar></tweet-topbar>');
    });

    it('should expose the sharedModel', () =>{
        var vm = directiveTest.createComponent({}).topbarVm;
        expect(vm.sharedModel).toBe(rootModelMock.sharedModel);
    });
    it('should expose the topbarModel', () =>{
        var vm = directiveTest.createComponent({}).topbarVm;
        expect(vm.model).toEqual(rootModelMock.topbarModel);
    });

    describe('on toggleCollapsed()', () =>{
        it('should collapse the topbar', () => {
            var vm = directiveTest.createComponent({}).topbarVm;
            spyOn(rootModelMock.topbarModel, 'toggleCollapsed');
            vm.toggleCollapsed();
            expect(vm.model.toggleCollapsed).toHaveBeenCalled();
        });
    });
    describe('on post()', () =>{
        it('should post a tweet', () =>{
            var vm = directiveTest.createComponent({}).topbarVm;
            spyOn(rootModelMock.topbarModel, 'addTweet');
            vm.post();
            expect(vm.model.addTweet).toHaveBeenCalled();
        })
    });
});

