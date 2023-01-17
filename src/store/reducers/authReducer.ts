import { ActionCase, ActionType } from '../actions/actionType';

const initState = {
    userDetail: null,
};

const reducer = (state = initState, action: ActionType) => {
    switch (action.type) {
        case ActionCase.SET_USER_DETAIL:
            return {
                ...state,
                userDetail: action.userDetail,
            };

        default:
            return state;
    }
};

export default reducer;
