import React from 'react';

import './Home.scss';

import DiagonalBackroundBox from './DiagonalBox';
import PublicNav from '../../shared/components/public-nav-bar/PublicNav';
import LandingPageSlashHeadline from './LandingPageSplashHeadline';

import LoginForm from '../login/parts/LoginForm';


import CopyrightNotice from '../../shared/components/CopyrightNotice';


import AdditionalLinks from '../login/parts/AdditionalLinks';
import Logo from '../../shared/components/logo/Logo';


export default function Home() {

    return (

        <div className="home-page">
            
            <DiagonalBackroundBox />             

            <div className="content-wrapper">
                      
                <LandingPageSlashHeadline />

                <PublicNav /> 
                <div className="pop-in-section">
                    
                    <h2>Welcome to CoderKai</h2>                    
                    <LoginForm />
                    <AdditionalLinks />

                </div>    
                
            </div>

            <CopyrightNotice />

        </div>
    )
}

// function LandingPageSlashHeadline() {
//     return (
//         <div className="headline-section">
//             <h1>Coder<em>Kai</em></h1>
//             <h2>Get Your Ninja On
//                 <span role="img" aria-label="Martial Artist Emoji">🥋</span>
//                 <span role="img" aria-label="Laptop Emoji">💻</span>
//             </h2>
//         </div>
//     )
// }