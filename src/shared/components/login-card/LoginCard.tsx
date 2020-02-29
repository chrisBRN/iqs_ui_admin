import React from 'react';
import { Link } from 'react-router-dom';

import InputField from '../input/InputField';


export default function LoginCard() {

    return (
        <div className="login-card">
         
            <h2>Sign In</h2>

            <form className="login-card-form">

                <InputField label={"Username"} />
                <InputField type={"password"} label={"Password"} />               

                <div className="sign-in-button-container">
                    <button className="sign-in-button">Login</button>
                </div>                             

                <div className="link-container privacy-statement">
                    <Link className="small" to="/todo">By clicking Login, you agree to our Terms and have read and acknowledge our Privacy Statement.</Link>
                </div>        

                <div className="link-container candidate">
                    <Link className="additional-info-mid-print" to="/todo">Candidate? Login Here</Link>
                </div>

                <div className="link-container">
                    <Link className="additional-info-mid-print" to="/todo">Forgot password?</Link>
                </div>     

            </form>

        </div>
    )
}