export class RegisterData {
    public emailAddress: string;
    public password: string;
    public confirmPassword: string;
    public firstName: string;
    public lastName: string;

    constructor(emailAddress: string, password: string, confirmPassword: string, firstName: string, lastName: string) {
        this.emailAddress = emailAddress;
        this.password = password;
        this.confirmPassword = confirmPassword;
        this.firstName = firstName;
        this.lastName = lastName;
    }
}