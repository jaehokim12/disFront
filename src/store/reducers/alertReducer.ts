import { alertActionType, alertCase } from '../actions/alertActionType';
export const initState = {
    showAlertMessage: false,
    alertMessageContent: null,
};

//Aciont 타입의 형태 action 함수 객체이며 키는 type 을 가짐
const reducer = (state = initState, action: alertActionType) => {
    switch (action.type) {
        case alertCase.OPEN_ALERT_MESSAGE:
            return {
                ...state,
                showAlertMessage: true,
                alertMessageContent: action.content,
            };
        case alertCase.CLOSE_ALERT_MESSAGE:
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
