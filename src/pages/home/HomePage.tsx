import React, { useState } from 'react';
import styled from 'styled-components';

import { StyledDiagonalBackgroundBox } from '../../shared/components/DiagonalBackroundBox';
import { BrandTypography } from './parts/StatementTypography';

import LoginForm from '../login/LoginForm';
import PlaceholderContactsPopIn from './parts/PlaceholderContactsPopIn';
import PlaceholderAboutPopIn from './parts/PlaceholderAboutPopIn';
import CopyrightNotice from '../../shared/components/CopyrightNotice';

import { StyledFullPage, StyledFullPageContentWrapper, StyledCard } from '../../shared/styling/SharedStyles'

const StyledPageContents = styled(StyledFullPageContentWrapper)`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;  
`;

const StyledBGBox = styled(StyledDiagonalBackgroundBox)`         
    width: 70%;
    left: -10%;
    transform: skew(8deg); 
`;

const StyledNav = styled.ul`

    position: absolute;
    top: -4em;
    right: 0em;

    list-style-type: none;    

    li {
        display: inline-block;    
        list-style-type: none;
        padding: 1em;
        font-weight: bold;  
        
        color: ${props => props.theme.colors.blue};
    
        &:hover {
            cursor: pointer;            
            color: ${props => props.theme.colors.green};                
        }   
    }
`;

export default function HomePage() {

    const [popInComponent, setPopInComponent] = useState<JSX.Element>(<LoginForm />)
    
    // TODO, hold login state here so its not lost when looking at contact / about

    return (

        <StyledFullPage>

            <StyledBGBox />

            <StyledPageContents>

                <BrandTypography headlineSize={"12rem"} subHeadlineSize={"2rem"} alignment={"right"}/>                

                <StyledCard width={"480px"} height={"600px"} shadowPop>

                <StyledNav>

                    <li onMouseEnter={() => setPopInComponent(<LoginForm />)}>LOGIN</li>
                    <li onMouseEnter={() => setPopInComponent(<PlaceholderContactsPopIn />)}>CONTACT</li>
                    <li onMouseEnter={() => setPopInComponent(<PlaceholderAboutPopIn />)}>ABOUT</li>

                </StyledNav>

                    {popInComponent}

                </StyledCard>

                <CopyrightNotice bottom={"2em"} left={"2em"}/>

            </StyledPageContents>

        </StyledFullPage>
    )
}