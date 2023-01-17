import React from 'react';
import { styled } from '@mui/system';
import FriendsListItem from './FriendsListItem';
import { connect } from 'react-redux';

const MainContainer = styled('div')({
    flexGrow: 1,
    width: '100%',
});

const FriendsList = ({ friends }: any) => {
    console.log('friend at coponent', friends);
    return (
        <MainContainer>
            {friends.map((f: any, key: any) => (
                <FriendsListItem username={f.username} key={key} />
            ))}
        </MainContainer>
    );
};

const mapStoreStateToProps = ({ friends }: any) => {
    console.log('redux friends', friends);
    return {
        ...friends,
    };
};

export default connect(mapStoreStateToProps)(FriendsList);
