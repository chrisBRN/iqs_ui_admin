import React from 'react';

export function UsernameInput(){
    return (
        <div className="input-with-label-pop">
            <div className="input-container">

                <input
                    className="input-field"
                    required
                    minLength={5}
                    maxLength={30}
                    pattern="[A-Za-z0-9_]+"
                    type="text"                   
                    placeholder={"Username"}                                       
                    >
                </input>

                <label
                    className="valid-label">
                    {"Username"}
                </label>

                <label
                    className="invalid-label">
                    {"5-30 Alphanumeric Characters"}
                </label>

            </div>
        </div>
    )
}

export function PasswordInput(){
    return (
        <div className="input-with-label-pop">
            <div className="input-container">

                <div className="input-border"></div>

                <input
                    className="input-field"
                    required
                    minLength={8}
                    maxLength={30}
                    pattern="(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\S+$).+"
                    type="password"                   
                    placeholder={"Password"}                   
                    >
                </input>               

                <label
                    className="valid-label">
                    {"Password"}
                </label>

                <label
                    className="invalid-label">
                    {"8-30 Characters, 1 UPPERCASE letter and A symbol"}
                </label>

            </div>
        </div>
    )
}