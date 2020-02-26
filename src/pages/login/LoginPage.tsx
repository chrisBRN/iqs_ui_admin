import React from 'react';

import Logo from '../../shared/components/logo/Logo';
import Hero from '../../shared/components/hero-image/Hero';
import LoginCard from '../../shared/components/login-card/LoginCard'

import '../../shared/styling/global-styling.scss';
import './LoginPage.scss';




export default function Login() { 

    return (        
        <div className="login-page">

            <div className="left-side">
                <div className="logo">
                    <Logo />
                </div>
                <div className="hero">
                    <Hero />  
                </div>      
                            
            </div>  

            <div className="right-side">

                <div className="inner-box">

                    <div className="welcome-headline">
                        <h1 className="statement-typography">Interview Questions</h1>                        
                    </div>
                    <LoginCard/>   
                    
                </div>
                
                <div className="small-print"> Copyright © Interview Questions Site {new Date().getFullYear()} </div>
               
               
            </div>  
                           
        </div>       
    );
}

