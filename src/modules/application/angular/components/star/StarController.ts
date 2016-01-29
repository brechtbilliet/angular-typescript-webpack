export class StarController {
    public starred: boolean;

    public toggle(): void {
        this.starred = !this.starred;
    }
}