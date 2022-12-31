import React, { useEffect } from 'react';
import { styled } from '@mui/system';
import Messages from './Messages/Messages';
import NewMessageInput from './NewMessageInput';
import { sendDirectMessage } from '../../realtimeCommunication/socketConnection';

const Wrapper = styled('div')({
    flexGrow: 1,
});

const MessengerContent = ({ chosenChatDetails }: any) => {
    return (
        <Wrapper>
            <Messages />
            <NewMessageInput />
        </Wrapper>
    );
};

export default MessengerContent;
