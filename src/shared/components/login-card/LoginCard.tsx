import React from 'react';
import { Link } from 'react-router-dom';


export default function LoginCard() {

    return (
        <div>          

            <div className="welcome-headline">                                
                <h1>Sign In</h1>                          
            </div>

            <form className="login-card-form">
                
                <div className="input-with-label-pop">    
                    <div className="input-container">
                        <input type="text" className="input-field" placeholder="Username *" ></input>     
                        <label className="input-label">Username *</label>  
                    </div>                                                    
                </div>

                <div className="input-with-label-pop">  
                    
                    <div className="input-container">                        
                        <input type="password" className="input-field" placeholder="Password * " ></input> 
                        <label className="input-label">Password *</label>  
                    </div>                                     
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