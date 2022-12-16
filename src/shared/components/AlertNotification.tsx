import React from 'react';
import { Dispatch } from 'react';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import { connect } from 'react-redux';
import { openAlertMessage, closeAlertMessage } from '../../store/actions/alertActions';
import { ActionFromReducersMapObject, ReducersMapObject } from 'redux';

const AlertNotification = ({ showAlertMessage, alertMessageContent, closeAlert }: any) => {
    let val = { ...alertMessageContent };
    // redux action OPEN_ALERT_MESSAGE -> reducer => showalert :true, alertmessgaeconent:
    // close 는 여기서 실행 CLOSE_ALERT_MESSAGE->reducer=> shoalert: false
    return (
        <Snackbar
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            open={showAlertMessage}
            onClose={closeAlert}
            autoHideDuration={6000}
        >
            <Alert severity="info">{val.message}</Alert>
        </Snackbar>
    );
};

const mapStoreStateToProps = ({ alert }: any) => {
    return {
        ...alert,
    };
};

const mapActionsToProps = (dispatch: any) => ({
    closeAlert: () => dispatch(closeAlertMessage()),
});

export default connect(mapStoreStateToProps, mapActionsToProps)(AlertNotification);
