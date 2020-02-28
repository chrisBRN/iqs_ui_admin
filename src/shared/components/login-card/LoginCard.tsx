import React from 'react';
import { Link } from 'react-router-dom';

import InputField from '../input/InputField';

export default function LoginCard() {

    return (
        <div>                                           
            <h1 className="welcome-headline">WELCOME</h1>  
            
            <form className="login-card-form">

                <InputField label={"Username"}/>
                <InputField type={"password"} label={"Password"}/>                   

                <div className="sign-in-button-container">
                    <button className="sign-in-button">Sign In</button>
                </div>

                {/* 

                <Link className="additional-info-mid-print" to="/todo">Forgot password?</Link>
                <Link className="additional-info-mid-print" to="/todo">Candidate? Login Here</Link> */}

            </form>

        </div>
    )
}