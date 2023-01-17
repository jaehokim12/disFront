interface setUserDetailsAction {
    type: ActionCase.SET_USER_DETAIL;
    userDetail: any;
}

interface IUserDetail {
    mail: string;
    password: string;
    username: string;
}

export type ActionType = setUserDetailsAction;

export enum ActionCase {
    SET_USER_DETAIL = 'SET_USER_DETAIL',
}
