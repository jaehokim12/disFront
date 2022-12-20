import { openAlertMessage } from './alertActions';
import * as api from '../../api';

export const friendsActions = {
    SET_FRIENDS: 'FRIENDS.SET_FRIENDS',
    SET_PENDING_FRIENDS_INVITATIONS: 'FRIENDS.SET_PENDING_FRIENDS_INVITATIONS',
    SET_ONLINE_USERS: 'FRIENDS.SET_ONLINE_USERS',
};

export const getActions = (dispatch: any) => {
    return {
        sendFriendInvitation: (data: any, closeDialogHandler: any) =>
            dispatch(sendFriendInvitation(data, closeDialogHandler)),
        acceptFriendInvitation: (data: any) => dispatch(acceptFriendInvitation(data)),
        rejectFriendInvitation: (data: any) => dispatch(rejectFriendInvitation(data)),
    };
};

export const setPendingFriendsInvitations = (pendingFriendsInvitations: any) => {
    return {
        type: friendsActions.SET_PENDING_FRIENDS_INVITATIONS,
        pendingFriendsInvitations,
    };
};

export const setFriends = (friends: any) => {
    return {
        type: friendsActions.SET_FRIENDS,
        friends,
    };
};

export const setOnlineUsers = (onlineUsers: any) => {
    return {
        type: friendsActions.SET_ONLINE_USERS,
        onlineUsers,
    };
};

const sendFriendInvitation = (data: any, closeDialogHandler: any) => {
    return async (dispatch: any) => {
        const response: any = await api.sendFriendInvitation(data);

        if (response.error) {
            dispatch(openAlertMessage(response.exception?.response?.data));
        } else {
            dispatch(openAlertMessage('Invitation has been sent!'));
            closeDialogHandler();
        }
    };
};

const acceptFriendInvitation = (data: any) => {
    return async (dispatch: any) => {
        const response: any = await api.acceptFriendInvitation(data);

        if (response.error) {
            dispatch(openAlertMessage(response.exception?.response?.data));
        } else {
            dispatch(openAlertMessage('Invitation accepted!'));
        }
    };
};

const rejectFriendInvitation = (data: any) => {
    return async (dispatch: any) => {
        const response: any = await api.rejectFriendInvitation(data);

        if (response.error) {
            dispatch(openAlertMessage(response.exception?.response?.data));
        } else {
            dispatch(openAlertMessage('Invitation rejected!'));
        }
    };
};
