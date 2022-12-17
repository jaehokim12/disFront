import { ActionCase, ActionType } from '../actions/actionType';

const initState = {
    userDetails: null,
};

const reducer = (state = initState, action: ActionType) => {
    switch (action.type) {
        case ActionCase.SET_USER_DETAILS:
            return {
                ...state,
                userDetails: action.userDetails,
            };

        default:
            return state;
    }
};

export default reducer;
