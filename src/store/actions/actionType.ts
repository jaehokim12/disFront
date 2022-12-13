interface authAction {
    type: ActionType.SET_USER_DETAILS;
    userDetails: IUserDetails;
}

interface IUserDetails {
    mail: string;
    password: string;
    username: string;
}

export type Action = authAction;

export enum ActionType {
    SET_USER_DETAILS = 'SET_USER_DETAILS',
}
