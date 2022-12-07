import React, { useEffect, useState } from 'react';
import { Typography } from '@mui/material';
import AuthBox from '../../shared/components/AuthBox';
import RegisterPageInput from './RegisterPageInput';
import RegisterPageFooter from './RegisterPageFooter';
import { validateRegisterForm } from '../.././shared/utils/validator';
import * as actions from '../../store/actions/authActions';
import { connect } from 'react-redux';
import { Dispatch } from 'react';
import { Action } from '../../store/actions';
import { ActionType } from '../../store/action-types';

// type UserDetails = {
//     mail: string;
//     password: string;
//     username: string;
// };
// interface IProps {
//     setUserDetails: (userDetails: UserDetails) => void;
// }
const RegisterPage = ({ setUserDetails }) => {
    const [mail, setMail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isFormValid, setIsFormValid] = useState(false);

    const handleRegister = () => {
        const userDetails = {
            mail,
            password,
            username,
        };
        setUserDetails(userDetails);
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
            <RegisterPageFooter handleRegister={handleRegister} isFormValid={!isFormValid} />
        </AuthBox>
    );
};
const mapActionsToProps = (dispatch: Dispatch<Action>) => ({
    setUserDetails: () => {
        return dispatch(actions.setUserDetails);
    },
});

export default connect(null, mapActionsToProps)(RegisterPage);
