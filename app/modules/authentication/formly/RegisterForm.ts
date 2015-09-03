export class RegisterForm {
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
        },
        <AngularFormly.IFieldConfigurationObject>{
            key: "confirmPassword",
            type: "input",
            templateOptions: <AngularFormly.ITemplateOptions>{
                type: "password",
                label: "Confirm password",
                placeholder: "Confirm your password",
                required: true
            }
        },
        <AngularFormly.IFieldConfigurationObject>{
            key: "firstName",
            type: "input",
            templateOptions: <AngularFormly.ITemplateOptions>{
                type: "text",
                label: "First name",
                placeholder: "Enter first name",
                required: true
            }
        },
        <AngularFormly.IFieldConfigurationObject>{
            key: "lastName",
            type: "input",
            templateOptions: <AngularFormly.ITemplateOptions>{
                type: "text",
                label: "Last name",
                placeholder: "Enter last name",
                required: true
            }
        }
    );
}