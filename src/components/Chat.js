import React from 'react'
import ChatHeader from "./ChatHeader"
import styled from "styled-components"

function Chat() {
    return (
        <Container>
            <ChatHeader/>
            <ChatBody>
            </ChatBody>
        </Container>
    )
}

export default Chat


const Container = styled.div`
    display:grid;
    grid-template-rows: 66px auto;
`


const ChatBody = styled.div``