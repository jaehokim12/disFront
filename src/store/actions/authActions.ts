import * as api from '../../api';
import { Dispatch } from 'redux';
import { Action, authActions } from '../actions';

// import { openAlertMessage } from './alertActions';

// export const getActions = (dispatch: Dispatch<Action>) => {
//     dispatch({
//         type: ActionType.SET_USER_DETAILS,
//         userDetails: {
//             mail: '',
//             password: '',
//             username: '',
//         },
//     });
// };

// export const setUserDetails = (userDetails:) => {
//     return {
//         type: ActionType.SET_USER_DETAILS,
//         userDetails,
//     };
// };

// const login = (userDetails: IUserDetails, history: any) => {
//     return async (dispatch: any) => {
//         const response: any = await api.login(userDetails);
//         console.log(response);
//         if (response.error) {
//             dispatch(openAlertMessage(response?.exception?.response?.data));
//         } else {
//             const { userDetails } = response?.data;
//             localStorage.setItem('user', JSON.stringify(userDetails));

//             dispatch(setUserDetails(userDetails));
//             history.push('/dashboard');
//         }
//     };
// };
interface IUserDetails {
    mail: string;
    password: string;
    username: string;
}
// interface GenericFunc<T> {
//     (param: T): T;
// }
// const GenericFunc = <T>(param: T): T => {
//     return param;
// };

const register = (userDetails: IUserDetails) => {
    return async (dispatch: Dispatch<Action>) => {
        // const response: any = await api.register(userDetails);
        dispatch({
            type: authActions.SET_USER_DETAILS,
        });
        // console.log(response);
        // if (response.error) {
        //     dispatch(openAlertMessage(response?.exception?.response?.data));
        // } else {
        //     const { userDetails } = response?.data;
        //     localStorage.setItem('user', JSON.stringify(userDetails));

        //     dispatch(setUserDetails(userDetails));
        //     history.push('/dashboard');
        // }
    };
};
