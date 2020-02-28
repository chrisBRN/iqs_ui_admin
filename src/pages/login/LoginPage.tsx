import React from 'react';
import { Link } from 'react-router-dom'

import Logo from '../../shared/components/logo/Logo';
import Hero from '../../shared/components/hero-image/Hero';
import LoginCard from '../../shared/components/login-card/LoginCard'

import { ExternalLink, ExternalLinkProps } from '../../shared/helpers/ExternalLink';

import '../../shared/styling/global-styling.scss';
import './LoginPage.scss';

const heroAttribution: ExternalLinkProps = (
    { 
        endpoint: "https://www.freepik.com/katemangostar", 
        anchorText: "Original Source Image by Kate Mangostar @ Freepik.com" 
    }
)    

const copyrightChrisBrn: ExternalLinkProps = (
    { 
        endpoint: "https://github.com/chrisBRN", 
        anchorText: "Copyright © ChrisBRN " + new Date().getFullYear()
    }
) 

export default function Login() {     

    return (
        <div className="login-page">

            <div className="left-side">

                <Link to="/home">
                    <div className="logo">
                        <Logo />
                    </div>
                </Link>

                <div className="hero">
                    <Hero />
                    <div className="small-print">
                        <ExternalLink {...heroAttribution} />
                    </div>
                </div>

            </div>

            <div className="right-side">

                <div className="inner-box">

                    <div className="login-card">
                        <LoginCard />
                    </div>

                </div>

                <div className="copyright-notice-container">
                    <div className="small-print">
                        <ExternalLink {...copyrightChrisBrn} />
                    </div>
                </div>

            </div>

        </div>
    );
}