import { Action } from './alertActionType';

export const openAlertMessage = (content: any) => {
    console.log('openAlertMessage', content);
    return {
        type: OPEN_ALERT_MESSAGE,
        content,
    };
};

export const closeAlertMessage = () => {
    return {
        type: CLOSE_ALERT_MESSAGE,
    };
};
const OPEN_ALERT_MESSAGE = 'OPEN_ALERT_MESSAGE';
const CLOSE_ALERT_MESSAGE = 'CLOSE_ALERT_MESSAGE';
