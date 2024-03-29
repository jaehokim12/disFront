import React, { useState, useEffect } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Typography from '@mui/material/Typography';
import { validateMail } from '../../shared/utils/validator';
import InputWithLabel from '../../shared/components/InputWithLabel';
import CustomPrimaryButton from '../../shared/components/CustomPrimaryButton';
import { connect } from 'react-redux';
import { getActions } from '../../store/actions/friendsActions';

const AddFriendDialog = ({ isDialogOpen, closeDialogHandler, sendFriendInvitation = () => {} }: any) => {
    const [mail, setMail] = useState('');
    const [isFormValid, setIsFormValid] = useState('') as any;

    const handleSendInvitation = () => {
        sendFriendInvitation(
            {
                targetMailAddress: mail,
            },
            handleCloseDialog,
        );
    };

    const handleCloseDialog = () => {
        closeDialogHandler();
        setMail('');
    };

    useEffect(() => {
        setIsFormValid(validateMail(mail));
    }, [mail, setIsFormValid]);

    return (
        <div>
            <Dialog open={isDialogOpen} onClose={handleCloseDialog}>
                <DialogTitle>
                    <Typography>Invite a Friend</Typography>
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>Enter e-mail address of friend which you would like to invite</DialogContentText>
                    <InputWithLabel
                        label="Mail"
                        type="text"
                        value={mail}
                        setValue={setMail}
                        placeholder="Enter mail address"
                    />
                </DialogContent>
                <DialogActions>
                    <CustomPrimaryButton
                        onClick={handleSendInvitation}
                        disabled={!isFormValid}
                        label="Send"
                        additionalStyles={{
                            marginLeft: '15px',
                            marginRight: '15px',
                            marginBottom: '10px',
                        }}
                    />
                </DialogActions>
            </Dialog>
        </div>
    );
};

const mapActionsToProps = (dispatch: any) => {
    return {
        ...getActions(dispatch),
    };
};

export default connect(null, mapActionsToProps)(AddFriendDialog);
