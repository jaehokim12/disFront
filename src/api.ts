import axios from 'axios';
import { logout } from './shared/utils/auth';
// import { logout } from './shared/utils/auth';

interface IUserDetail {
    mail: string;
    password: string;
    username: string;
    token?: string;
}
const apiClient = axios.create({
    baseURL: 'http://localhost:5002/api',
    timeout: 1000,
});
// 모든 요청을 가로채서 보낸다
// 가로채는 이유? token
apiClient.interceptors.request.use(
    (config: any) => {
        // here
        const userDetail = localStorage.getItem('user') as any;
        console.log('userDetails:::', userDetail);

        console.log('userdetialsuserdetials');
        // here
        if (userDetail) {
            console.log('localStorage', localStorage.getItem('user'));
            console.log(JSON.parse(userDetail));
            const token = JSON.parse(userDetail).token;
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;

        // const token = JSON.parse(userDetail).userDetail.token;
        // const token = JSON.parse(userDetail).token;
        // config.headers.Authorization = `Bearer ${token}`;
        // config.headers['Authorization'] = `Bearer ${token}`;

        // config.headers = {
        //     Authorization: `Bearer ${token}`,

        // console.log('configconfig', config);

        // return config;
    },
    (error: any) => {
        return Promise.reject(error);
    },
);
// apiClient.interceptors.response.use(
//     function (response) {
//         // console.log('response', response);
//         if (response) {
//             // console.log('response', response);
//             return response;
//         }
//         return response;
//     },
//     function (error) {
//         // console.log('error', error);
//         return Promise.reject(error);
//     },
// );
export const login = async (userDetail: IUserDetail) => {
    try {
        return await apiClient.post('/login', userDetail);
        // return data;
    } catch (exception) {
        // checkResponseCode(exception);
        return {
            error: true,
            exception,
        };
    }
};

export const register = async (data: any) => {
    try {
        return await apiClient.post('/register', data);
        // console.log('datadata', data);
        // 여기선 있는데
    } catch (exception) {
        // console.log('exception', exception);
        // checkResponseCode(exception);
        return {
            error: true,
            exception,
        };
    }
};

// secure routes

const checkResponseCode = (exception: any) => {
    const responseCode = exception?.response?.status;

    if (responseCode) {
        responseCode === 401 || (responseCode === 403 && logout());
    }
};

export const sendFriendInvitation = async (data: IUserDetail) => {
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
