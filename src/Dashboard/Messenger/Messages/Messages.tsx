import React from 'react';
import { styled } from '@mui/system';
import MessagesHeader from './MessagesHeader';
import { connect } from 'react-redux';
import Message from './Message';

const MainContainer = styled('div')({
    height: 'calc(100% - 60px)',
    overflow: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
});

const Messages = ({ chosenChatDetails, messages }: any) => {
    return (
        <MainContainer>
            <MessagesHeader username={chosenChatDetails?.name} />
            {messages.map((message: any, index: any) => {
                return (
                    <div key={index} style={{ width: '97%' }}>
                        <Message content={message.content} username={message.name} />
                    </div>
                );
            })}
        </MainContainer>
    );
};

const mapStoreStateToProps = ({ chat }: any) => {
    return {
        ...chat,
    };
};

export default connect(mapStoreStateToProps)(Messages);
