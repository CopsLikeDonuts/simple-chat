import React from 'react'
import classes from './Message.module.scss'

export default function Message({name, message, align}) {
    return (
        <div className={classes.MessageWrapper} style={{ justifyContent: align, flexDirection: align === 'left' ? 'row' : 'row-reverse' }}>
            <div className={classes.MessageUserAvatar} style={{ backgroundColor: align === 'left' ? '#436c6c' : '#6cc49e' }}>{name.slice(0, 1).toUpperCase()}</div>
            <p className={classes.MessageText}>{message}</p>
        </div>
    )
}
