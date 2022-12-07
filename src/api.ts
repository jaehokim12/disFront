import axios from 'axios';
// import { logout } from './shared/utils/auth';

const apiClient = axios.create({
    baseURL: 'http://localhost:5002/api',
    timeout: 1000,
});

apiClient.interceptors.request.use(
    (config: any) => {
        const userDetails = localStorage.getItem('user');

        if (userDetails) {
            const token = JSON.parse(userDetails).token;
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    },
    err => {
        return Promise.reject(err);
    },
);

// public routes

export const login = async (data: any) => {
    try {
        return await apiClient.post('/auth/login', data);
    } catch (exception) {
        return {
            error: true,
            exception,
        };
    }
};

export const register = async (data: any) => {
    try {
        return await apiClient.post('/auth/register', data);
    } catch (exception) {
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
        // (responseCode === 401 || responseCode === 403) && logout();
    }
};

// export const sendFriendInvitation = async (data: any) => {
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

// export const sendFriendInvitaion = async (data: any) => {
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
