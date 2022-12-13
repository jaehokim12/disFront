import { Dispatch } from 'react';
import { Action, ActionType } from './alertActionType';

export const openAlertMessage = (content: string) => {
    return {
        type: ActionType.OPEN_ALERT_MESSAGE,
        content,
    };
};

export const closeAlertMessage = () => {
    return {
        type: ActionType.CLOSE_ALERT_MESSAGE,
    };
};
