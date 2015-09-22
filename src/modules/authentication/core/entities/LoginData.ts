export class LoginData {
    public emailAddress: string;
    public password: string;

    constructor(emailAddress: string, password: string) {
        this.emailAddress = emailAddress;
        this.password = password;
    }
}