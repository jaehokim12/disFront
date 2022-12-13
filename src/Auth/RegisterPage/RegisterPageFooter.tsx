import React from 'react';
import CustomPrimaryButton from '../../shared/components/CustomPrimaryButton';
import * as Router from 'react-router-dom';
import { Tooltip } from '@mui/material';
import RedirectInfo from '../../shared/components/RedirectInfo';
const getFormNotValidMessage = () => {
    return 'Username should contains between 3 and 12 characters and password should contains between 6 and 12 character. Also correct e-mail address should provided';
};

const getFormValidMessage = () => {
    return 'Press to register!';
};

interface IProps {
    handleRegister: () => any;
    isFormValid: boolean;
}

const RegisterPageFooter = ({ handleRegister, isFormValid }: IProps) => {
    const navigate = Router.useNavigate();
    const handlePushToLoginPage = () => {
        navigate('/login');
    };
    return (
        <>
            <Tooltip title={!isFormValid ? getFormNotValidMessage() : getFormValidMessage()}>
                <div>
                    <CustomPrimaryButton
                        label="Register"
                        additionalStyles={{ marginTop: '30px' }}
                        disabled={isFormValid}
                        onClick={handleRegister}
                    />
                </div>
            </Tooltip>
            <RedirectInfo
                text=""
                redirectText="Already have an account ?"
                additionalStyles={{ marginTop: '5px' }}
                redirectHandler={handlePushToLoginPage}
            />
        </>
    );
};

export default RegisterPageFooter;
