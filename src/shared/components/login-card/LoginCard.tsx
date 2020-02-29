import React from 'react';
import { Link } from 'react-router-dom';

import InputField from '../input/InputField';
import Logo from '../logo/Logo';
import ExternalLink from '../../helpers/ExternalLink';

export default function LoginCard() {

    return (
        <div className="brand-section">

            <h1 className="brandname-h1">
                <ExternalLink 
                    endpoint={"https://www.coderKai.com/"} 
                    anchorText={"CoderKai"} 
                />                 
            </h1>

            <div className="mini-logos">
               
                <div className="iqs">
                    <Logo /> 
                    <ExternalLink 
                        endpoint={"/home"} 
                        anchorText={"iQuestions"} 
                    />                 
                </div>  

                <div className="algo-cash">
                    <h2>&#x20BF;</h2>
                    <ExternalLink 
                        endpoint={"https://www.algocash.com/"} 
                        anchorText={"algoCASH"} 
                    />                 
                </div>                    
                              
            </div>

            <hr></hr>
            <h2>Login</h2>

            <form className="login-card-form">

                <InputField label={"Username"} />
                <InputField type={"password"} label={"Password"} />

                <div className="sign-in-button-container">
                    <button className="sign-in-button">Login</button>
                </div>

                <div className="link-container">
                    <Link className="additional-info-mid-print" to="/todo">Forgot password?</Link>
                </div>

                <div className="link-container candidate">
                    <Link className="additional-info-mid-print" to="/todo">Candidate? Login Here</Link>
                </div>
                
                
                
                
                

            </form>

        </div>
    )
}