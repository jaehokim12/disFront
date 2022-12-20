import axios, { AxiosError, isAxiosError, AxiosResponse } from 'axios';
import { Token } from 'typescript';
import { logout } from './shared/utils/auth';
// import { logout } from './shared/utils/auth';

interface IUserDetails {
    mail: string;
    password: string;
    username: string;
}
const apiClient = axios.create({
    baseURL: 'http://localhost:5002/auth',
    timeout: 1000,
});
// 모든 요청을 가로채서 보낸다
// 가로채는 이유? token
apiClient.interceptors.request.use(
    config => {
        const useDetails = localStorage.getItem('user');
        if (useDetails !== null) {
            const token = JSON.parse(useDetails).token;

            config.headers = {
                Authorization: `Bearer ${token}`,
            };
        }
        console.log('config', config);
        return config;
    },
    err => {
        console.log('err::::::', err);
        return Promise.reject(err);
    },
);

export const login = async (useDetails: IUserDetails) => {
    try {
        let datas: AxiosResponse;
        datas = await apiClient.post('/login', useDetails);

        return {
            data: datas.data,
        };
    } catch (err) {
        const error = err as AxiosError;
        return {
            error: error,
        };
    }
};

export const register = async (useDetails: IUserDetails) => {
    try {
        let datas: AxiosResponse;
        datas = await apiClient.post('/register', useDetails);
        return {
            data: datas.data,
        };
    } catch (err) {
        return { error: err };
    }
};

// secure routes

const checkResponseCode = (exception: any) => {
    const responseCode = exception?.response?.status;

    if (responseCode) {
        // responseCode === 401 || responseCode === 403;
        // && logout();
    }
};

export const sendFriendInvitation = async (data: IUserDetails) => {
    try {
        return await apiClient.post('/friend-invitation/invite', data);
    } catch (exception) {
        checkResponseCode(exception);
        return {
            error: true,
            exception,
        };
    }
};

export const acceptFriendInvitation = async (data: any) => {
    try {
        return await apiClient.post('/friend-invitation/accept', data);
    } catch (exception) {
        checkResponseCode(exception);
        return {
            error: true,
            exception,
        };
    }
};

export const rejectFriendInvitation = async (data: any) => {
    try {
        return await apiClient.post('/friend-invitation/reject', data);
    } catch (exception) {
        checkResponseCode(exception);
        return {
            error: true,
            exception,
        };
    }
};
