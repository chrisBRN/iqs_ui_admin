import React, { useState } from 'react';
import styled from 'styled-components';

import { StyledDiagonalBackgroundBox } from '../../shared/components/DiagonalBackroundBox';
import { BrandTypography } from './parts/StatementTypography';

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
    right: 2em;

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

const PositionedCard = styled(StyledCard)`
    margin: 2em;
    padding: 2em;
`

export default function HomePage() {

    const [popInComponent, setPopInComponent] = useState<JSX.Element>(<LoginForm />)
    
    // TODO, hold login state here so its not lost when looking at contact / about

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

                <PositionedCard width={"480px"} height={"600px"} shadowPop>

                    {popInComponent}

                </PositionedCard>

                <CopyrightNotice bottom={"2em"} left={"2em"}/>

            </StyledFullPageContentWrapper>

        </StyledFullPage>
    )
}