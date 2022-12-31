import * as api from '../../api';
import { Action, Dispatch, AnyAction } from 'redux';
import { ActionType, ActionCase } from './actionType';
import axios from 'axios';
import { openAlertMessage } from './alertActions';
import { NavigateFunction } from 'react-router-dom';
import { alertActionType } from '../actions/alertActionType';

interface IUserDetails {
    mail: string;
    password: string;
    username: string;
    token?: string;
}

export const setUserDetails = (userDetails: IUserDetails): ActionType => {
    return {
        type: ActionCase.SET_USER_DETAILS,
        userDetails,
    };
};

export const registerAction = (userDetails: IUserDetails, navigate: NavigateFunction) => {
    // userDetils -> register token 없음
    return async (dispatch: Dispatch<AnyAction>) => {
        const response = await api.register(userDetails);
        if (response.error) {
            // client axios request error
            dispatch(openAlertMessage(response.error));
        } else {
            // with token
            // token 있는 userDetails
            const userDetails = response.data;
            // only response data
            localStorage.setItem('user', JSON.stringify(userDetails));
            dispatch(setUserDetails(userDetails));
            navigate('/dashboard');
        }
    };
};

export const loginAction = (userDetails: IUserDetails, navigate: NavigateFunction) => {
    return async (dispatch: Dispatch<any>) => {
        const response = await api.login(userDetails);
        if (response.error) {
            dispatch(openAlertMessage(response.error));
        } else {
            const userDetails = response.data;
            localStorage.setItem('user', JSON.stringify(userDetails));
            dispatch(setUserDetails(userDetails));
            navigate('/dashboard');
        }
    };
};
