import * as api from '../../api';
import { Action, Dispatch, AnyAction } from 'redux';
import { ActionType, ActionCase } from './actionType';
import axios from 'axios';
import { openAlertMessage } from './alertActions';
// import { NavigateFunction } from 'react-router-dom';
import { alertActionType } from '../actions/alertActionType';

interface IUserDetail {
    mail: string;
    password: string;
    username: string;
    token?: string;
}
export const getActions = (dispatch: any) => {
    return {
        login: (userDetail: any, history: any) => dispatch(login(userDetail, history)),
        register: (userDetail: any, history: any) => dispatch(register(userDetail, history)),
        setUserDetail: (userDetail: any) => dispatch(setUserDetail(userDetail)),
    };
};

export const setUserDetail = (userDetail: any): ActionType => {
    return {
        type: ActionCase.SET_USER_DETAIL,
        userDetail,
    };
};

export const register = (userDetail: any, history: any) => {
    // userDetils -> register token 없음
    return async (dispatch: any) => {
        const response: any = await api.register(userDetail);
        console.log(response);
        if (response.error) {
            // client axios request error
            dispatch(openAlertMessage(response?.exception?.response?.data));
        } else {
            // with token
            // token 있는 userDetails
            const { userDetail } = response?.data;
            console.log('userDetilasssss', userDetail);
            // only response data
            localStorage.setItem('user', JSON.stringify(userDetail));
            dispatch(setUserDetail(userDetail));
            history.push('/dashboard');
        }
    };
};

export const login = (userDetail: IUserDetail, history: any) => {
    return async (dispatch: any) => {
        const response: any = await api.login(userDetail);
        console.log('response after login', response);
        if (response.error) {
            dispatch(openAlertMessage(response?.exception?.response?.data));
        } else {
            const { userDetail } = response?.data;
            console.log('userDetail login:::', userDetail);
            localStorage.setItem('user', JSON.stringify(userDetail));
            dispatch(setUserDetail(userDetail));
            history.push('/dashboard');
        }
    };
};
