import React, { useState } from 'react';

import './Home.scss';

import DiagonalBackroundBox from './parts/DiagonalBackroundBox';
import BigBrandTypography from './parts/BigBrandTypography';

import LoginForm from '../login/LoginForm';
import PlaceholderContactsPopIn from './parts/PlaceholderContactsPopIn';
import PlaceholderAboutPopIn from './parts/PlaceholderAboutPopIn';
import CopyrightNotice from '../../shared/components/CopyrightNotice';

import {StyledCard, StyledUL, StyledLI} from '../../shared/styling/SharedStyles'

export default function HomePage() {

    const [popInComponent, setPopInComponent] = useState<JSX.Element>(<LoginForm />)

    return (

        <div className="home-page">
            
            <DiagonalBackroundBox />             

            <div className="content-wrapper">
                      
                <BigBrandTypography />

                <StyledUL className="nav-bar">    

                    <StyledLI onClick={() => setPopInComponent(<LoginForm />)}>LOGIN</StyledLI>
                    <StyledLI onClick={() => setPopInComponent(<PlaceholderContactsPopIn />)}>CONTACT</StyledLI>
                    <StyledLI onClick={() => setPopInComponent(<PlaceholderAboutPopIn />)}>ABOUT</StyledLI>

                </StyledUL>

                <StyledCard className="pop-in-section">    

                    {popInComponent}

                </StyledCard>   

                <CopyrightNotice />  
            </div>

            

        </div>
    )
}