// this file is only being used by karma
requireAll((<any>require).context("./", true, /spec.ts$/));
function requireAll(r: any): any {
    r.keys().forEach(r);
}