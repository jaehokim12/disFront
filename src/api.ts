import axios, { AxiosError, isAxiosError, AxiosResponse } from 'axios';
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

apiClient.interceptors.request.use(
    (config: any) => {
        const userDetails = localStorage.getItem('user');
        // console.log('userDetails', userDetails);

        if (userDetails) {
            console.log('userdetails', JSON.parse(userDetails).data.token);
            const token = JSON.parse(userDetails).data.token;
            console.log('token', token);
            config.headers.Authorization = `Bearer ${token}`;
            console.log('config.headers.Authorization', config.headers.Authorization);
        }

        return config;
    },
    err => {
        return Promise.reject(err);
    },
);

export const login = async (data: IUserDetails) => {
    try {
        return await apiClient.post('/login', data);
    } catch (err) {
        const error = err as AxiosError;
        return {
            error: error,
        };
    }
};

export const register = async (data: IUserDetails) => {
    try {
        let datas: AxiosResponse;
        datas = await apiClient.post('/register', data);
        return { data: datas };
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

export const sendFriendInvitaion = async (data: IUserDetails) => {
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
