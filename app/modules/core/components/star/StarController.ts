export interface IStarAttributes{
    starred: boolean
}
export class StarController implements IStarAttributes{
    public starred: boolean;
    public toggle(): void{
        this.starred = !this.starred;
    }
    public static $inject = ['$scope']
}