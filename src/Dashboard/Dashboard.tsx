import React, { useEffect } from 'react';
import { styled } from '@mui/system';
import SideBar from './SideBar/SideBar';
import FriendsSideBar from './FriendsSideBar/FriendsSideBar';
import Messenger from './Messenger/Messenger';
import AppBar from './AppBar/AppBar';
import { logout } from '../shared/utils/auth';
import { connect } from 'react-redux';
// import { setUserDetail } from '../store/actions/authActions';
import { connectWithSocketServer } from '../realtimeCommunication/socketConnection';
import { getActions } from '../store/actions/authActions';
import { Dispatch } from 'redux';
const Wrapper = styled('div')({
    width: '100%',
    height: '100vh',
    display: 'flex',
});

// interface Iprops {
//     setUserDetail: (param: any) => void;
// }
const Dashboard = ({ setUserDetail }: any) => {
    console.log('setUserDetailsetUserDetail', setUserDetail);
    useEffect(() => {
        console.log('useEffect Dsh board');
        const userDetail = localStorage.getItem('user');
        console.log('userDetails at Dashboard', userDetail);

        if (!userDetail) {
            logout();
        } else {
            setUserDetail(JSON.parse(userDetail));
            connectWithSocketServer(JSON.parse(userDetail));
        }
    }, []);

    return (
        <Wrapper>
            <SideBar />
            <FriendsSideBar />
            <Messenger />
            <AppBar />
        </Wrapper>
    );
};

// const mapActionsToProps = (dispatch: any) => ({
//     setUserDetail: (userDetail: any) => dispatch(setUserDetail(userDetail)),
// });
const mapActionsToProps = (dispatch: any) => {
    return {
        ...getActions(dispatch),
    };
};
export default connect(null, mapActionsToProps)(Dashboard);
