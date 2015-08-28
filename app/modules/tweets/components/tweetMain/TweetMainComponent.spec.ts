/// <reference path="../../../../_all.ts" />
import 'angular-mocks';
import {TweetMainComponent,IIsolateScope }from './TweetMainComponent';
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
        directiveTest = new ComponentTest<IIsolateScope, Object>('<tweet-main></tweet-main>');
    });

    it('should expose the sharedModel', () =>{
        var vm = directiveTest.createComponent({}).mainVm;
        expect(vm.sharedModel).toBe(rootModelMock.sharedModel);
    });
});