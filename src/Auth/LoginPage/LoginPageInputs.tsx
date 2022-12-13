import React from 'react';
import InputWithLabel from '../../shared/components/InputWithLabel';
interface Iprops {
    mail: string;
    setMail: any;
    password: string;
    setPassword: any;
}
const LoginPageInputs = ({ mail, setMail, password, setPassword }: Iprops) => {
    return (
        <>
            <InputWithLabel
                value={mail}
                setValue={setMail}
                label="E-mail"
                type="text"
                placeholder="Enter e-mail address"
            />
            <InputWithLabel
                value={password}
                setValue={setPassword}
                label="Password"
                type="password"
                placeholder="Enter password"
            />
        </>
    );
};

export default LoginPageInputs;
