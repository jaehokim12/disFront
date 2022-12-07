// import { ActionType } from '../action-types';

interface authAction {
    type: authActions.SET_USER_DETAILS;
}

export type Action = authAction;

export enum authActions {
    SET_USER_DETAILS = 'AUTH.SET_USER_DETAILS',
}
