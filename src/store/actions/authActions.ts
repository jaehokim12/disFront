import * as api from '../../api';
import { Dispatch } from 'redux';
import { Action, ActionType } from './actionType';
import axios from 'axios';
import { openAlertMessage } from './alertActions';
import { NavigateFunction } from 'react-router-dom';

export const login = (userDetails: IUserDetails, navigate: NavigateFunction) => {
    return async (dispatch: Dispatch<any>) => {
        const response: any = await api.login(userDetails);
        if (response.error) {
            dispatch(openAlertMessage(response.error));
        } else {
            const { userDetails } = response.data;
            localStorage.setItem('user', JSON.stringify(userDetails));
            dispatch(setUserDetails(userDetails));
            navigate('/dashboard');
        }
    };
};
interface IUserDetails {
    mail: string;
    password: string;
    username: string;
}

export const setUserDetails = (userDetails: IUserDetails): Action => {
    return {
        type: ActionType.SET_USER_DETAILS,
        userDetails,
    };
};

export const registerAction = (userDetails: IUserDetails, navigate: NavigateFunction) => {
    return async (dispatch: Dispatch<any>) => {
        const response = await api.register(userDetails);
        console.log('response in registerAction', response);
        // 결과가 나오긴 하는데
        if (response.error) {
            dispatch(openAlertMessage(response.error));
        } else {
            const userDetails: any = response;
            // console.log('userDetails register', userDetails);
            localStorage.setItem('user', JSON.stringify(userDetails));
            dispatch(setUserDetails(userDetails));
            navigate('/dashboard');
        }
    };
};
