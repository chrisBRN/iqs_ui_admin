import React from 'react';
import LoginCard from '../../shared/components/login-card/LoginCard'
import ExternalLink from '../../shared/helpers/ExternalLink';

import '../../shared/styling/global-styling.scss';
import './LoginPage.scss';
import '../../shared/components/login-card/LoginCard.scss';

export default function Login() {

    return (
        <div className="login-page">

            <div className="login-card-container">  
                <LoginCard />    
            </div>

            <div className="copyright-notice-container">
               
                <ExternalLink
                    endpoint={"https://github.com/chrisBRN"}
                    anchorText={"Copyright © ChrisBRN " + new Date().getFullYear()}
                />                            

            </div>

        </div>
    );
}