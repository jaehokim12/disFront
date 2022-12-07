// import { authActions } from '../actions/authActions';
import { ActionType } from '../action-types';
import { Action } from '../actions';

const initState = {
    userDetails: null,
};

const reducer = (state = initState, action: Action) => {
    switch (action.type) {
        case ActionType.SET_USER_DETAILS:
            return {
                ...state,
                userDetails: action.userDetails,
            };
        default:
            return state;
    }
};

export default reducer;
