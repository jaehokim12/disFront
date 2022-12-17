import { alertCase } from './alertActionType';

export const openAlertMessage = (content: any) => {
    return {
        type: alertCase.OPEN_ALERT_MESSAGE,
        content,
    };
};

export const closeAlertMessage = () => {
    return {
        type: alertCase.CLOSE_ALERT_MESSAGE,
    };
};
