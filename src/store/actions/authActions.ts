import * as api from '../../api';
import { Dispatch } from 'redux';
import { Action, ActionType } from './actionType';
import axios from 'axios';
import { openAlertMessage } from './alertActions';
import { NavigateFunction } from 'react-router-dom';

export const login = (userDetails: IUserDetails) => {
    return async (dispatch: Dispatch<any>) => {
        const response: any = await api.login(userDetails);

        if (response.error) {
            dispatch(openAlertMessage(response?.exception?.response?.data));
        } else {
            const { userDetails } = response?.data;
            localStorage.setItem('user', JSON.stringify(userDetails));

            dispatch(setUserDetails(userDetails));
            // history.push('/dashboard');
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

export const registerAction = (userDetails: IUserDetails) => {
    return async (dispatch: Dispatch<any>) => {
        const response = await api.register(userDetails);
        console.log('response');
        // dispatch(setUserDetails(userDetails));
        console.log('response', response);
        if (response) {
            // console.log('response', response);
            // dispatch(openAlertMessage(response?.exception?.response?.data));
        } else {
            localStorage.setItem('user', JSON.stringify(userDetails));

            // 실행코드
            dispatch(setUserDetails(userDetails));
            // history.push('/dashboard');
        }
    };

    // dispatch(setUserDetails(userDetails));

    // if (response) {
    //     // const { userDetails } = response?.data;
    //     // console.log('userDetials', userDetails);
    //     // dispatch(openAlertMessage(response?.exception?.response?.data));
    // } else {
    //     // const { userDetails } = response?.data;
    //     // localStorage.setItem('user', JSON.stringify(userDetails));
    //     // history.push('/dashboard');
    // }
    // };
};
