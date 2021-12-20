import React from 'react'
import classes from './Header.module.scss'

export default function Header() {
    return (
        <div className={classes.HeaderWrapper}>
            <p className={classes.HeaderText}>Chat</p>
        </div>
    )
}
