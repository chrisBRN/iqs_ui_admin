import React, { useState } from 'react';
import styled from 'styled-components';

import { StyledDiagonalBackgroundBox } from '../../shared/components/DiagonalBackroundBox';
import BrandTypography from './parts/StatementTypography';

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

                <BrandTypography headlineSize={"12rem"} subHeadlineSize={"2rem"}/>

                <StyledNav>

                    <li onMouseEnter={() => setPopInComponent(<LoginForm />)}>LOGIN</li>
                    <li onMouseEnter={() => setPopInComponent(<PlaceholderContactsPopIn />)}>CONTACT</li>
                    <li onMouseEnter={() => setPopInComponent(<PlaceholderAboutPopIn />)}>ABOUT</li>

                </StyledNav>

                <StyledCard width={"480px"} height={"600px"}>

                    {popInComponent}

                </StyledCard>

                <CopyrightNotice bottom={"2em"} left={"2em"}/>

            </StyledFullPageContentWrapper>

        </StyledFullPage>
    )
}