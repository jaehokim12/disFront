interface openAction {
    type: OPEN_ALERT_MESSAGE;
    content: string;
}

interface closeAction {
    type: CLOSE_ALERT_MESSAGE;
}

export type Action = openAction | closeAction;

// export enum ActionType {
//     OPEN_ALERT_MESSAGE = 'OPEN_ALERT_MESSAGE',
//     CLOSE_ALERT_MESSAGE = 'CLOSE_ALERT_MESSAGE',
// }

export type OPEN_ALERT_MESSAGE = 'OPEN_ALERT_MESSAGE';
export type CLOSE_ALERT_MESSAGE = 'CLOSE_ALERT_MESSAGE';
