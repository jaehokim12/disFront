import * as api from '../../api';
import { Dispatch } from 'redux';
import { Action, ActionType } from './actionType';
import axios from 'axios';
import { openAlertMessage } from './alertActions';
import { NavigateFunction } from 'react-router-dom';

export const login = (userDetails: IUserDetails, navigate: NavigateFunction) => {
    return async (dispatch: Dispatch<any>) => {
        const response: any = await api.login(userDetails);
        console.log('response', response);
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
        console.log('response', response);
        if (response.error) {
            dispatch(openAlertMessage(response.error));
        } else {
            console.log('response', response.data);
            const userDetails: any = response.data;
            localStorage.setItem('user', JSON.stringify(userDetails));
            dispatch(setUserDetails(userDetails));
            navigate('/dashboard');
        }
    };
};
