import React from 'react';
import Button from '@mui/material/Button';
import Avatar from '../../../shared/components/Avatar';
import Typography from '@mui/material/Typography';

import { chatTypes, getActions } from '../../../store/actions/chatActions';
import { connect } from 'react-redux';
const FriendsListItem = ({ username, setChosenChatDetails }: any) => {
    const handleChooseActiveConversation = () => {
        setChosenChatDetails({ name: username }, chatTypes.DIRECT);
    };
    return (
        <Button
            onClick={handleChooseActiveConversation}
            style={{
                width: '100%',
                height: '42px',
                marginTop: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                textTransform: 'none',
                color: 'black',
                position: 'relative',
            }}
        >
            <Avatar username={username.toString().substring(0, 2)} />
            <Typography
                style={{
                    marginLeft: '7px',
                    fontWeight: 700,
                    color: '#8e9297',
                }}
                variant="subtitle1"
                align="left"
            >
                {username}
            </Typography>
        </Button>
    );
};

const mapActionsToProps = (dispatch: any) => {
    return {
        ...getActions(dispatch),
    };
};

export default connect(null, mapActionsToProps)(FriendsListItem);
