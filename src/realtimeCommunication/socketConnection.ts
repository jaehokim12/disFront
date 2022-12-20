import { io, Socket } from 'socket.io-client';

interface IUserDetails {
    username: string;
    password: string;
}
export const connectWithSocketServer = (userDetails: any) => {
    console.log('userDetails to socket connect', userDetails);
    const jwtToken = userDetails.userDetails.token;
    const socket = io('http://localhost:5002', {
        auth: {
            token: jwtToken,
        },
    });

    socket.on('connect', () => {
        console.log('succesfully connected with socket.io server');
        console.log(socket.id);
    });
};
