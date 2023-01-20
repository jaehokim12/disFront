import React from 'react';
import { styled } from '@mui/system';
import Avatar from '../../../shared/components/Avatar';
import Typography from '@mui/material/Typography';

const MainContainer = styled('div')({
    width: '97%',
    display: 'flex',
    marginTop: '10px',
});

const AvatarContainer = styled('div')({
    width: '70px',
});

const MessageContainer = styled('div')({
    display: 'flex',
    flexDirection: 'column',
});

const MessageContent = styled('div')({
    color: '#DCDDDE',
});

const Message = ({ username, content }: any) => {
    return (
        <MainContainer>
            <MessageContainer>
                <Typography style={{ fontSize: '16px', color: 'white' }}>{username} </Typography>
                <MessageContent>{content}</MessageContent>
            </MessageContainer>
        </MainContainer>
    );
};

export default Message;
