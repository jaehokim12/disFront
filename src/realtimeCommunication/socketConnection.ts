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
    console.log('connectWithSocketServer userDetail', userDetail);
    const jwtToken = userDetail.token;
    console.log('jwttoken', jwtToken);
    socket = io('http://localhost:5002', {
        auth: {
            token: jwtToken,
        },
    });

    socket.on('connect', () => {
        console.log('succesfully connected with socket.io server');
        console.log(socket.id);
    });
    socket.on('friends-list', (data: any) => {
        const { friends } = data;
        console.log('friends list at socket:::::', friends);

        store.dispatch(setFriends(friends));
    });
    socket.on('friends-invitations', (data: any) => {
        const { pendingInvitations } = data;
        console.log('invite at front :::: ', data);
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
