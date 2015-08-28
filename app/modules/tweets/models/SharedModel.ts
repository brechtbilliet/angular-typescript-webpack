/// <reference path="../../../_all.ts" />
import {Tweet} from '../entities/Tweet';
import {ISharedModel} from './Interfaces';
import {ITweetService} from '../services/Interfaces';

export class SharedModel implements ISharedModel{
    private _topbarCollapsed: Boolean;
    private _sidebarCollapsed: Boolean;
    
    public tweets: Array<Tweet>;
    public get topbarCollapsed(): Boolean{
        return this._topbarCollapsed;
    }
    public get sidebarCollapsed(): Boolean{
        return this._sidebarCollapsed;
    }
    constructor(tweetService:ITweetService ) {
        var tweetService = tweetService;
        this._sidebarCollapsed = false;
        this._topbarCollapsed = false;
        this.tweets = tweetService.getAll();
    }
    public toggleTopbar(){
        this._topbarCollapsed = !this._topbarCollapsed;
    }
    public toggleSidebar(){
        this._sidebarCollapsed = !this._sidebarCollapsed;
    }

    public static $inject = ['ITweetService'];
}

