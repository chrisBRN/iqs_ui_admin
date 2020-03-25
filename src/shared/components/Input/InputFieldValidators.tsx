export interface InputFieldValidators {
    autoComplete: string;
    minLength: number;
    maxLength: number;
    pattern: string;
    title: string;
    type: string;
    placeholder: string;
}

export const usernameValidation: InputFieldValidators = {
    autoComplete: "username",
    minLength: 5,
    maxLength: 30,
    pattern: "[A-Za-z0-9_]+",
    title: "Between 5 and 30 characters which can include: \n * Uppercase letters \n * Lowercase letters \n * Numbers",
    type: "text",
    placeholder: "Username"
}

export const passwordValidation: InputFieldValidators = {
    autoComplete: "password",
    minLength: 8,
    maxLength: 30,
    pattern: "(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&+=]).+",     
    title: "Between 8 and 30 characters which must include: \n * An uppercase letter \n * A lowercase letter \n * A number \n * A symbol (@, #, $, %, &)",
    type: "password",
    placeholder: "Password"
}

export function passwordValidator(type: string){
    return {
        autoComplete: "password",
        minLength: 8,
        maxLength: 30,
        pattern: "(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&+=]).+",     
        title: "Between 8 and 30 characters which must include: \n * An uppercase letter \n * A lowercase letter \n * A number \n * A symbol (@, #, $, %, &)",
        type: type,
        placeholder: "Password"
    }
}

export const emailValidation: InputFieldValidators = {
    autoComplete: "email",
    minLength: 5,
    maxLength: 100,
    pattern: ".+@coderKai.com|.+@coderkai.com",     
    title: "Please Enter a Valid CoderKai Email Address i.e. [xyz]@coderkai.com",
    type: "email",
    placeholder: "Email"
}

export const roleValidation: InputFieldValidators = {
    autoComplete: "role",
    minLength: 5,
    maxLength: 9,
    pattern: "ADMIN|EMPLOYEE",     
    title: "ADMIN or EMPLOYEE",
    type: "text",
    placeholder: "Role"
}