import React from 'react'
import classes from "./TextInput.module.scss";

export default function TextInput(props) {

    const { name, onChange, errorText } = props

    return (
        <>
            <p className={classes.InputError}>{errorText}</p>
            <input
                placeholder='Enter your name'
                value={name}
                onChange={onChange}
                name='userName'
                className={classes.Input}
            />
        </>
    )
}
