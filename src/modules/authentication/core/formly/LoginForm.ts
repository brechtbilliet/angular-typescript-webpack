export class LoginForm {
    public loginFields: Array<AngularFormly.IFieldConfigurationObject> = new Array<AngularFormly.IFieldConfigurationObject>(
        <AngularFormly.IFieldConfigurationObject>{
            key: "emailAddress",
            type: "input",
            templateOptions: <AngularFormly.ITemplateOptions> {
                type: "email",
                label: "Email address",
                placeholder: "Enter email",
                required: true
            }
        },
        <AngularFormly.IFieldConfigurationObject>{
            key: "password",
            type: "input",
            templateOptions: <AngularFormly.ITemplateOptions>{
                type: "password",
                label: "Password",
                placeholder: "Enter password",
                required: true
            }
        }
    );
}