interface setUserDetailsAction {
    type: ActionCase.SET_USER_DETAILS;
    userDetails: IUserDetails;
}

interface IUserDetails {
    mail: string;
    password: string;
    username: string;
}

export type ActionType = setUserDetailsAction;

export enum ActionCase {
    SET_USER_DETAILS = 'SET_USER_DETAILS',
}
