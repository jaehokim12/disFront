import { Action, ActionType } from '../actions/alertActionType';
const initState = {
    showAlertMessage: false,
    alertMessageContent: null,
};

const reducer = (state = initState, action: Action) => {
    switch (action.type) {
        case ActionType.OPEN_ALERT_MESSAGE:
            return {
                ...state,
                showAlertMessage: true,
                alertMessageContent: action.content,
            };
        case ActionType.CLOSE_ALERT_MESSAGE:
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
