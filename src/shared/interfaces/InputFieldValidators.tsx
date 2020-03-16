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
    pattern: "(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=S+$)+",     
    title: "Between 8 and 30 characters which must include: \n * An uppercase letter \n * a lowercase letter \n * A number \n * A symbol (@, #, $, %, &)",
    type: "password",
    placeholder: "Password"
}
