// import alertActions from '../actions/alertActions';
import { ActionType } from '../action-types';
import { Action } from '../actions';
const initState = {
    showAlertMessage: false,
    alertMessageContent: null,
};

const reducer = (state = initState, action: Action) => {
    switch (action.type) {
        case alertActions.OPEN_ALERT_MESSAGE:
            return {
                ...state,
                showAlertMessage: true,
                alertMessageContent: action.content,
            };
        case alertActions.CLOSE_ALERT_MESSAGE:
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
