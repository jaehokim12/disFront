import React, { useEffect } from 'react';
import { styled } from '@mui/system';
import SideBar from './SideBar/SideBar';
import FriendsSideBar from './FriendsSideBar/FriendsSideBar';
import Messenger from './Messenger/Messenger';
import AppBar from './AppBar/AppBar';
import { logout } from '../shared/utils/auth';
import { connect } from 'react-redux';
import { setUserDetails } from '../store/actions/authActions';
import { connectWithSocketServer } from '../realtimeCommunication/socketConnection';
import { Dispatch } from 'redux';
const Wrapper = styled('div')({
    width: '100%',
    height: '100vh',
    display: 'flex',
});

interface Iprops {
    setUserDetails: (param: any) => void;
}
const Dashboard = ({ setUserDetails }: Iprops) => {
    useEffect(() => {
        const userDetails = localStorage.getItem('user');

        if (!userDetails) {
            logout();
        } else {
            setUserDetails(JSON.parse(userDetails));
            connectWithSocketServer(JSON.parse(userDetails));
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

const mapActionsToProps = (dispatch: Dispatch<any>) => ({
    setUserDetails: (userDetails: any) => {
        return dispatch(setUserDetails(userDetails));
    },
});

export default connect(null, mapActionsToProps)(Dashboard);
