import React, { useState, useEffect } from 'react';
import AuthBox from '../../shared/components/AuthBox';
import LoginPageFooter from './LoginPageFooter';
import LoginPageHeader from './LoginPageHeader';
import LoginPageInputs from './LoginPageInputs';
import { validateLoginForm } from '../../shared/utils/validator';
import { connect } from 'react-redux';
import { useNavigate, NavigateFunction } from 'react-router-dom';
import { loginAction } from '../../store/actions/authActions';
import { Dispatch } from 'redux';
import { NavLink } from 'react-router-dom';

interface Iprops {
    loginFunc: any;
}

const LoginPage = ({ loginFunc }: Iprops) => {
    const navigate = useNavigate();

    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
    const [isFormValid, setIsFormValid] = useState(false);

    useEffect(() => {
        setIsFormValid(validateLoginForm({ mail, password } as any));
    }, [mail, password, setIsFormValid]);

    // type handleFun = ()=>(dispatch: Dispatch<any>) => Promise<void>

    const handleLogin = () => {
        const userDetails = {
            mail,
            password,
        };

        loginFunc(userDetails, navigate);
        //  handlelogin이라는 값을 물려받으면
        // 물려받기만 하면 action함수 실행함
    };

    return (
        <AuthBox>
            <LoginPageHeader />
            <LoginPageInputs mail={mail} setMail={setMail} password={password} setPassword={setPassword} />
            <LoginPageFooter isFormValid={isFormValid} handleLogin={handleLogin} />
        </AuthBox>
    );
};
interface ILoginDetail {
    mail: string;
    password: string;
}
const mapActionsToProps = (dispatch: Dispatch<any>) => ({
    loginFunc: (userDetails: any, navigate: NavigateFunction) => dispatch(loginAction(userDetails, navigate)),
});

export default connect(null, mapActionsToProps)(LoginPage);
