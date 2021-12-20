import React from 'react'
import classes from "./Button.module.scss";

export default function Button(props) {
    const { disabled, text, onClick } = props

    return (
        <button className={classes.Button} disabled={disabled} onClick={onClick}>{text}</button>
    )
}
