interface IProps {
    mail: any;
    password: any;
    username: any;
}

export const validateLoginForm = ({ mail, password }: IProps) => {
    const isMailValid = validateMail(mail);
    const isPasswordValid = validatePassword(password);
    return isMailValid && isPasswordValid;
};

export const validateRegisterForm = ({ mail, password, username }: IProps) => {
    return validateMail(mail) && validatePassword(password) && validateUsername(username);
};

const validatePassword = (password: any) => {
    return password.length > 5 && password.length < 13;
};

export const validateMail = (mail: any) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(mail);
};

const validateUsername = (username: any) => {
    return username.length > 2 && username.length < 13;
};
