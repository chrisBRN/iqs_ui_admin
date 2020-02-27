import React from 'react';
import { Link } from 'react-router-dom';


export default function LoginCard() {

    return (
        <div>          

            <div className="welcome-headline">                                
                <h1>Sign In</h1>                          
            </div>

            <form className="login-card-form">
                
                <div className="has-float-lable">  
                    <label className="input-label">Username</label>                             
                    <input className="input-field username" placeholder="Username *" type="text"></input>                    
                </div>

                <div className="has-float-lable">  
                    <label className="input-label">Password</label>                  
                    <input className="input-field password" placeholder="Password * " type="password"></input>                    
                </div>

                {/* <div>
                    <input className="remember-me-checkbox" type="checkbox"></input>
                    <label>Remember Me</label>
                </div>

                <button className="submit">Submit</button>

                <Link className="additional-info-mid-print" to="/todo">Forgot password?</Link>
                <Link className="additional-info-mid-print" to="/todo">Candidate? Login Here</Link> */}

            </form>

        </div>
    )
}