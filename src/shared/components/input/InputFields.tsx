import React from 'react';
import TextField from '@material-ui/core/TextField';

export function UsernameField(){

    return (
        <TextField
        className="input-username"
        label="Username"
        type="text"        
        variant="outlined"
    />
    )
}

export function PasswordField(){

    return (
        <TextField
        className="input-password"
        label="Password"
        type="password"        
        variant="outlined"
    />
    )
}

