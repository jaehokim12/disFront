import { Action, OPEN_ALERT_MESSAGE, CLOSE_ALERT_MESSAGE } from '../actions/alertActionType';
export const initState = {
    showAlertMessage: false,
    alertMessageContent: null,
};

const reducer = (state = initState, action: Action) => {
    switch (action.type) {
        case 'OPEN_ALERT_MESSAGE':
            return {
                ...state,
                showAlertMessage: true,
                alertMessageContent: action.content,
            };
        case 'CLOSE_ALERT_MESSAGE':
            return {
                ...state,
                showAlertMessage: false,
                alertMessageContent: null,
            };
        default:
            return state;
    }
};

export default reducer;
