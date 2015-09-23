export class AuthenticationData {
    public token: string;
    public firstName: string;
    public lastName: string;
    constructor(token: string, firstName: string, lastName: string){
        this.token = token;
        this.firstName = firstName;
        this.lastName = lastName;
    }
}