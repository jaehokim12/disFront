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
    (config: any) => {
        const userDetails = localStorage.getItem('user') as string;
        // console.log('userDetails 1st ', userDetails); // string
        if (userDetails !== 'undefined') {
            console.log(' check  undefined');
            const token = JSON.parse(userDetails).token;
            config.headers.Authorization = `Bearer ${token}`;
        } else {
            console.log('config::::::', config);
            return config;
        }
        console.log('config', config);
        return config;
    },
    err => {
        console.log('err::::::', err);
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

export const register = async (userData: IUserDetails) => {
    try {
        let datas: AxiosResponse;
        let Token;
        datas = await apiClient.post('/register', userData);
        console.log('register datas::::::', datas);
        return {
            data: datas.data,
            Token,
        };
    } catch (err) {
        // console.log('err', err);
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

// export const sendFriendInvitation = async (data: IUserDetails) => {
//     try {
//         return await apiClient.post('/friend-invitation/invite', data);
//     } catch (exception) {
//         checkResponseCode(exception);
//         return {
//             error: true,
//             exception,
//         };
//     }
// };

// export const sendFriendInvitaion = async (data: IUserDetails) => {
//     try {
//         return await apiClient.post('/friend-invitation/invite', data);
//     } catch (exception) {
//         checkResponseCode(exception);
//         return {
//             error: true,
//             exception,
//         };
//     }
// };
