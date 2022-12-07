import React from 'react';
import InputWithLabel from '../../shared/components/InputWithLabel';

interface Iprops {
    mail: string;
    setMail: React.Dispatch<React.SetStateAction<string>>;
    username: string;
    setUsername: React.Dispatch<React.SetStateAction<string>>;
    password: string;
    setPassword: React.Dispatch<React.SetStateAction<string>>;
}
const RegisterPageInput = (props: Iprops) => {
    const { mail, setMail, username, setUsername, password, setPassword } = props;

    return (
        <>
            <InputWithLabel
                value={mail}
                setValue={setMail}
                label="E-mail address"
                type="text"
                placeholder="Enter e-mail address"
            />
            <InputWithLabel
                value={username}
                setValue={setUsername}
                label="Username"
                type="text"
                placeholder="Enter a username"
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

export default RegisterPageInput;
