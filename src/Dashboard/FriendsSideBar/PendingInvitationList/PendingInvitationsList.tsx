import React from 'react';
import { styled } from '@mui/system';
import PendingInvitationsListItem from './PendingInvitationsListItem';
import { connect } from 'react-redux';

const MainContainer = styled('div')({
    width: '100%',
    height: '22%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    overflow: 'auto',
});

const PendingInvitationsList = ({ pendingFriendsInvitations }: any) => {
    return (
        <MainContainer>
            {pendingFriendsInvitations.map((value: any, key: any) => {
                return (
                    <PendingInvitationsListItem
                        key={key}
                        // id={invitation.id}
                        username={value.username}
                        // mail={invitation.mail}
                    />
                );
            })}
        </MainContainer>
    );
};

const mapStoreStateToProps = ({ friends }: any) => {
    return {
        ...friends,
    };
};

export default connect(mapStoreStateToProps)(PendingInvitationsList);
