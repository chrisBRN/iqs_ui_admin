import React, { useState } from 'react';
import styled from 'styled-components';

import { StyledDiagonalBackgroundBox } from '../shared/styling/DiagonalBackroundBox';
import BrandTypography from '../shared/components/Misc/BrandTypography';

import LoginForm from '../shared/components/Input/LoginForm';
import PlaceholderContactsPopIn from '../sections/ContactUs';
import PlaceholderAboutPopIn from '../sections/About';
import CopyrightNotice from '../shared/components/Misc/CopyrightNotice';

import { StyledFullPage, StyledFullPageContentWrapper, StyledCard } from '../shared/styling/SharedStyles'

const StyledContainer = styled(StyledFullPageContentWrapper)`
    display: flex;
    flex-wrap: wrap;    
    flex-direction: row;
    align-items: center;
    justify-content: center;   
`;

const StyledContent = styled.div`          
    margin: 4em;
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
        
        color: ${props => props.theme.colors.offBlack};
    
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

            <StyledContainer>

                <StyledContent>
                    <BrandTypography headlineSize={"12rem"} subHeadlineSize={"2rem"} alignment={"right"}/>    
                </StyledContent>  

                <StyledContent>

                    <StyledCard width={"480px"} height={"600px"} shadowPop>

                        <StyledNav>
                            <li onClick={() => setPopInComponent(<LoginForm />)}>LOGIN</li>
                            <li onClick={() => setPopInComponent(<PlaceholderContactsPopIn />)}>CONTACT</li>
                            <li onClick={() => setPopInComponent(<PlaceholderAboutPopIn />)}>ABOUT</li>
                        </StyledNav>

                        {popInComponent}

                    </StyledCard>

                </StyledContent>                 

                <CopyrightNotice bottom={"2em"} left={"2em"}/>

            </StyledContainer>

        </StyledFullPage>
    )
}