import React, {useState} from 'react'
import classes from './Home.module.scss'
import Button from "../../components/UI/Button";
import TextInput from "../../components/UI/TextInput";
import {useHistory} from "react-router-dom";
import routeNames from "../../routeNames";

export default function Home() {

    const [name, setName] = useState('')
    const [error, setError] = useState('')
    const history = useHistory()

    const onNameEnter = (e) => {
        e.target.value.length < 2 ? setError('Min length is 2 symbols') : setError('')
        setName(e.target.value)
    }

    const onSignInChat = () => {
        history.push(routeNames.chat)
        sessionStorage.setItem('userName', name)
    }

    return (
        <div className={classes.HomeWrapper}>
            <div>
                <TextInput value={name} onChange={onNameEnter} errorText={Boolean(error.length) && error}/>
                <Button disabled={!Boolean(name.length >= 2)} text='Enter' onClick={onSignInChat}/>
            </div>
        </div>
    )
}
