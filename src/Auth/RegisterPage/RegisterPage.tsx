import React, { useEffect, useState } from 'react';
import { Typography } from '@mui/material';
import AuthBox from '../../shared/components/AuthBox';
import RegisterPageInput from './RegisterPageInput';
import RegisterPageFooter from './RegisterPageFooter';
import { validateRegisterForm } from '../.././shared/utils/validator';
import * as actions from '../../store/actions/authActions';
import { connect } from 'react-redux';
import { register } from '../../store/actions/authActions';
// import { NavigateFunction, useNavigate } from 'react-router-dom';
import { getActions } from '../../store/actions/authActions';
import { useHistory } from 'react-router-dom';
import { Dispatch } from 'redux';
type IUserDetail = {
    mail: string;
    password: string;
    username: string;
};

interface IProps {
    // registerFunc: (userDetail: IUserDetail, navigate: NavigateFunction) => (dispatch: Dispatch<any>) => Promise<void>;
    // registerFunc: (userDetail: any, history: any) => (dispatch: Dispatch<any>) => Promise<void>;
}
const RegisterPage = ({ register }: any) => {
    const history = useHistory();
    // const navigate = useNavigate();
    const [mail, setMail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isFormValid, setIsFormValid] = useState(false);

    const handleRegister = () => {
        const userDetail = {
            mail,
            password,
            username,
        };
        register(userDetail, history);
    };
    useEffect(() => {
        setIsFormValid(validateRegisterForm({ mail, password, username }));
    }, [mail, password, username, setIsFormValid]);

    return (
        <AuthBox>
            <Typography variant="h5" sx={{ color: 'white ' }}>
                Create an account
            </Typography>
            <RegisterPageInput
                mail={mail}
                setMail={setMail}
                username={username}
                setUsername={setUsername}
                password={password}
                setPassword={setPassword}
            />
            <RegisterPageFooter handleRegister={handleRegister} isFormValid={isFormValid} />
        </AuthBox>
    );
};
// const mapActionsToProps = (dispatch: any) => ({
//     registerFunc: (userDetail: IUserDetail, history: any) => dispatch(register(userDetail, history)),
// });
const mapActionsToProps = (dispatch: any) => {
    return {
        ...getActions(dispatch),
    };
};
export default connect(null, mapActionsToProps)(RegisterPage);
