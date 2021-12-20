import React from 'react'
import classes from './ContentWrapper.module.scss'

export default function ContentWrapper(props) {

    const { children } = props

    return (
        <div className={classes.root}>
            <div className={classes.content}>
                {children}
            </div>
        </div>
    )
}
