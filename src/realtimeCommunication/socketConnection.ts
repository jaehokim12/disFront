import { io, Socket } from 'socket.io-client';
import store from '../store/store';
import { setFriends, setPendingFriendsInvitations } from '../store/actions/friendsActions';
import { setMessages } from '../store/actions/chatActions';
interface IUserDetail {
    username: string;
    password: string;
}
let socket: any = null;
export const connectWithSocketServer = (userDetail: any) => {
    const jwtToken = userDetail.token;
    socket = io('http://localhost:5002', {
        auth: {
            token: jwtToken,
        },
    });

    socket.on('connect', () => {});
    socket.on('friends-list', (data: any) => {
        const { friends } = data;

        store.dispatch(setFriends(friends));
    });
    socket.on('friends-invitations', (data: any) => {
        const { pendingInvitations } = data;

        store.dispatch(setPendingFriendsInvitations([pendingInvitations]));
    });

    socket.on('direct-message', (data: any) => {
        store.dispatch(setMessages(data));
    });
};

export const sendDirectMessage = (data: any) => {
    socket.emit('direct-message', data);
};
export const getDirectChatHistory = (data: any) => {
    socket.emit('direct-message', data);
};
