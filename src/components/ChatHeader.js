import React from 'react'
import styled from "styled-components"
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import EditIcon from '@material-ui/icons/Edit';
import InfoIcon from '@material-ui/icons/Info';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import PersonIcon from '@material-ui/icons/Person';

function ChatHeader() {
    return (
        <Container>
            <ChatHeaderSide>
                <ChatHeaderSideTop>
                    <TextTop>
                        # Channel-name
                    </TextTop>
                    <ImageTop>
                        <StarOutlineIcon/>
                    </ImageTop>
                </ChatHeaderSideTop>
                <ChatHeaderSideBottom>
                    <Image>
                    <EditIcon/>
                    </Image>
                    <TextBottom>
                    |  Add a Topic
                    </TextBottom>
                </ChatHeaderSideBottom>
            </ChatHeaderSide>
            <ChatHeaderAside>
                <Person>
                <PersonIcon/>
                <PersonIcon/>
                </Person>
                <Image>
                <PersonAddIcon/>
                </Image>
                <Image>
                <InfoIcon/>
                </Image>
            </ChatHeaderAside>
        </Container>
    )
}

export default ChatHeader



const Container = styled.div`
    display:grid;
    grid-template-columns: auto 200px;
    border-bottom: 1px solid #d1e0e0;
`


const ChatHeaderSide = styled.div`
    padding-left:20px;
`


const ChatHeaderAside = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    margin-right:20px;
`


const ChatHeaderSideTop = styled.div`
    height:50%;
    margin-top:10px;
    margin-bottom: -10px;
    display:flex;
`


const ChatHeaderSideBottom = styled.div`
    height:50%;
    padding-bottom:5px;
    color:#808080;
    display:flex;
`


const TextTop = styled.div`
    color:#000000;
    padding-right:5px;
    cursor:pointer;
    font-weight:bold;
`

const ImageTop = styled.div`
    color:#669999;
    width:10px;
    height:10px;
    cursor:pointer;
`

const TextBottom = styled.div`
    padding-right:5px;
    cursor:pointer;
`

const Image = styled.div`
    cursor:pointer;
`

const Person = styled.div`
    cursor:pointer;
`