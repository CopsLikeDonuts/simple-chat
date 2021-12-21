import React, {useEffect, useState} from 'react'
import classes from './ChatPage.module.scss'
import Message from "../../components/Message";
import Button from "../../components/UI/Button";
import {useDispatch, useSelector} from "react-redux";
import {addMessageRequest, getMessagesRequest} from "../../store/reducers/messages";
import {selectMessages} from "../../store/selectors/messages";
import routeNames from "../../routeNames";
import {useHistory} from "react-router-dom";

const chatPageHeight = 340

export default function ChatPage() {

    const { messages } = useSelector(selectMessages)

    const [messagesCount, setMessagesCount] = useState(10)
    const [message, setMessage] = useState('')
    const [userName, setUserName] = useState('')

    const dispatch = useDispatch()
    const history = useHistory()

    useEffect(() => {
        setUserName(sessionStorage.getItem('userName'))
    }, [])

    useEffect(() => {
        if (!Boolean(sessionStorage.getItem('userName'))) {
            history.push(routeNames.home)
        }
    },[])

    useEffect(() => {
        window.addEventListener('storage', (e) => {
            dispatch(getMessagesRequest())
        })
    }, [])

    useEffect(() => {
        dispatch(getMessagesRequest())
    }, [])

    const handleScroll = (e) => {
        e.stopPropagation()
        let element = e.target
        const wrapperHeightWithPaddings = chatPageHeight + 128
        if (element.scrollHeight - Math.abs(element.scrollTop) <= wrapperHeightWithPaddings) {
            setMessagesCount(prevState => prevState + 10)
        }
    }

    const onMessageEnter = (e) => {
        setMessage(e.target.value)
    }

    const onMessageAdd = () => {
        dispatch(addMessageRequest({userName, message}))
        setMessage('')
    }

    return (
        <>
            <div className={classes.ChatPageWrapper} onScroll={handleScroll} id='wrapper' style={{ height: chatPageHeight }}>
                {[...messages].reverse().slice(0, messagesCount).map((message, index) => (
                    <Message key={index} message={message.message} name={message.userName} align={userName === message.userName ? 'right' : 'left'}/>
                ))}
            </div>
            <div className={classes.ChatPageInputSection}>
                <textarea value={message} onChange={onMessageEnter} className={classes.ChatMessageInput}/>
                <Button disabled={message.length === 0} text='Send' onClick={onMessageAdd}/>
            </div>
        </>

    )
}
