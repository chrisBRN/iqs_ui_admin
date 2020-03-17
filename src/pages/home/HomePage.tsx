import React, { useState } from 'react';
import styled from 'styled-components';

import { StyledDiagonalBackgroundBox } from '../../shared/components/DiagonalBackroundBox';
import BigBrandTypography from './parts/BigBrandTypography';

import LoginForm from '../login/LoginForm';
import PlaceholderContactsPopIn from './parts/PlaceholderContactsPopIn';
import PlaceholderAboutPopIn from './parts/PlaceholderAboutPopIn';
import CopyrightNotice from '../../shared/components/CopyrightNotice';

import { StyledFullPage, StyledFullPageContentWrapper, StyledCard } from '../../shared/styling/SharedStyles'

const StyledBGBox = styled(StyledDiagonalBackgroundBox)`         
    width: 70%;
    left: -10%;
    transform: skew(8deg); 
`;

const StyledNav = styled.ul`

    position: absolute;
    top: 2em;
    right: 4em;

    list-style-type: none;    

    li {
        display: inline-block;    
        list-style-type: none;
        padding: 1em;
        font-weight: bold;  
        
        color: ${props => props.theme.colors.green};
    
        &:hover {
            cursor: pointer;            
            color: ${props => props.theme.colors.red};                
        }   
    }
`;

export default function HomePage() {

    const [popInComponent, setPopInComponent] = useState<JSX.Element>(<LoginForm />)

    return (

        <StyledFullPage>
            
            <StyledBGBox />             

            <StyledFullPageContentWrapper>
                      
                <BigBrandTypography />

                <StyledNav>    

                    <li onMouseEnter={() => setPopInComponent(<LoginForm />)}>LOGIN</li>
                    <li onMouseEnter={() => setPopInComponent(<PlaceholderContactsPopIn />)}>CONTACT</li>
                    <li onMouseEnter={() => setPopInComponent(<PlaceholderAboutPopIn />)}>ABOUT</li>

                </StyledNav>

                <StyledCard width={"480px"} height={"600px"}>    

                    {popInComponent}

                </StyledCard>   

                <CopyrightNotice />  

            </StyledFullPageContentWrapper>

        </StyledFullPage>
    )
}