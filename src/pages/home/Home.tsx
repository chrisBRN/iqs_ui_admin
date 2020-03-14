import React from 'react';

import './Home.scss';

import PublicNav from '../../shared/components/public-nav-bar/PublicNav';
import '../../shared/components/public-nav-bar/PublicNav.scss';
import CopyrightNotice from '../../shared/components/CopyrightNotice';
import LoginForm from '../login/parts/LoginForm';
import AdditionalLinks from '../login/parts/AdditionalLinks';

export default function Home() {

    return (

        <div className="home-page">

            <div className="page-wrapper">

                <PublicNav />

                <div className="diagonal-container">
                    <div className="left-section">

                        <div className="headline-section">
                            <h1>Coder<em>Kai</em></h1>
                            <h2>Get Your Ninja On 🥋 💻</h2>  
                        </div>
                        
                    </div>
                </div>

                {/* <div className="right-section"> 
                
                <div className="content card">

                    <section><LoginForm /></section>
                    <section><AdditionalLinks /></section>

                </div> */}
                
                {/* </div> */}
                
                <CopyrightNotice />   
            </div>

        </div>
    )
}