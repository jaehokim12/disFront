import React, { useState } from 'react';
import { styled } from '@mui/system';
import { connect } from 'react-redux';
import { sendDirectMessage } from '../../realtimeCommunication/socketConnection';

const MainContainer = styled('div')({
    height: '60px',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
});

const Input = styled('input')({
    backgroundColor: '#2f3136',
    width: '98%',
    height: '44px',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontSize: '14px',
    padding: '0 10px',
});

const NewMessageInput = ({ chosenChatDetails }: any) => {
    const [message, setMessage] = useState('');

    const handleMessageValueChange = (event: any) => {
        setMessage(event.target.value);
    };

    const handleKeyPressed = (event: any) => {
        if (event.key === 'Enter') {
            handleSendMessage();
        }
    };

    const handleSendMessage = () => {
        // sendMessage
        // message 배열 > 0
        // sendDirectMessage({ 받을사람: 받을사람아디 , 내용 : 메세지})

        if (message.length > 0) {
            sendDirectMessage({
                receiverUserId: chosenChatDetails.name,
                content: message,
            });
            // socket emit 이후
            // useState(=="")
            setMessage('');
        }
    };

    return (
        <MainContainer>
            <Input
                placeholder={`Write message to ${chosenChatDetails.name}`}
                value={message}
                onChange={handleMessageValueChange}
                onKeyDown={handleKeyPressed}
            />
        </MainContainer>
    );
};

const mapStoreStateToProps = ({ chat }: any) => {
    return {
        ...chat,
    };
};

export default connect(mapStoreStateToProps)(NewMessageInput);
