interface openAlertMessageAction {
    type: alertCase.OPEN_ALERT_MESSAGE;
    content: string;
}

interface closeAlertMessageAction {
    type: alertCase.CLOSE_ALERT_MESSAGE;
}

export type alertActionType = openAlertMessageAction | closeAlertMessageAction;

export enum alertCase {
    OPEN_ALERT_MESSAGE = 'OPEN_ALERT_MESSAGE',
    CLOSE_ALERT_MESSAGE = 'CLOSE_ALERT_MESSAGE',
}
