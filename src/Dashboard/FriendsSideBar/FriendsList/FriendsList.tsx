import React from 'react';
import { styled } from '@mui/system';
import FriendsListItem from './FriendsListItem';
import { connect } from 'react-redux';

const MainContainer = styled('div')({
    flexGrow: 1,
    width: '100%',
});

const checkOnlineUsers = (friends = [], onlineUsers = []) => {
    friends.forEach((f: any) => {
        const isUserOnline = onlineUsers.find((user: any) => user.userId === f.id);
        f.isOnline = isUserOnline ? true : false;
    });

    return friends;
};

const FriendsList = ({ friends }: any) => {
    return (
        <MainContainer>
            <FriendsListItem username={friends} />
        </MainContainer>
    );
};

const mapStoreStateToProps = ({ friends }: any) => {
    return {
        ...friends,
    };
};

export default connect(mapStoreStateToProps)(FriendsList);
