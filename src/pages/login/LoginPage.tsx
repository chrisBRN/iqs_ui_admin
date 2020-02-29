import React from 'react';
import { Link } from 'react-router-dom'

import Logo from '../../shared/components/logo/Logo';
import Hero from '../../shared/components/hero-image/Hero';
import LoginCard from '../../shared/components/login-card/LoginCard'
import BrandsCard from '../../shared/components/brands-card/BrandsCard';

import ExternalLink from '../../shared/helpers/ExternalLink';

import '../../shared/styling/global-styling.scss';
import './LoginPage.scss';
import '../../shared/components/brands-card/BrandsCard.scss';
import '../../shared/components/login-card/LoginCard.scss';


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
                        <ExternalLink 
                            endpoint={"https://www.freepik.com/katemangostar"} 
                            anchorText={"Original Source Image by Kate Mangostar @ Freepik.com"} 
                        />
                    </div>
                </div>

            </div>

            <div className="right-side">

                <div className="inner-box">

                    <BrandsCard />
                    <LoginCard />
                

                    

                </div>

                <div className="copyright-notice-container">
                    <div className="small-print">    
                        <ExternalLink 
                            endpoint={"https://github.com/chrisBRN"} 
                            anchorText={"Copyright © ChrisBRN " + new Date().getFullYear()}                     
                        />
                    </div>
                </div>

               

            </div>

        </div>
    );
}