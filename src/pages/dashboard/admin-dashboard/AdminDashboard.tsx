import React, { useState } from 'react';
import styled from 'styled-components';

import { StyledDiagonalBackgroundBox } from '../../../shared/components/DiagonalBackroundBox';
import { StyledFullPage, StyledFullPageContentWrapper, StyledCard, defaultTheme, StyledHR } from '../../../shared/styling/SharedStyles';
import BrandTypography from '../../home/parts/StatementTypography';
import { Link } from 'react-router-dom';
import CopyrightNotice from '../../../shared/components/CopyrightNotice';
import { InternalLink } from '../../../shared/helpers/Links';
import AdminDashboardHome from './parts/AdminDashboardHome';

const StyledBGBox = styled(StyledDiagonalBackgroundBox)`         
    width: 40%;
    left: -20%;
    transform: skew(8deg); 
`;

const StyleList = styled.ul`    
    width: 80%;    
    margin: 1em;
    text-transform: uppercase;  
`;

const StyledLI = styled.div`    

    background-color: ${props => props.theme.colors.white};
    color: ${props => props.theme.colors.green};    

    box-sizing: border-box;        
    width: 100%;        
    
    border: 1px solid ${props => props.theme.colors.border};

    padding: 1em 2em 1em 2em;
    margin-top: 0.25em;

    &:hover {
        color: ${props => props.theme.colors.red};
        cursor: pointer;
        font-weight: bold;
        border-right-width: 1em;
        border-color: ${props => props.theme.colors.green};

        a {
            color: ${props => props.theme.colors.red};
        }
    }   

    a {
        color: ${props => props.theme.colors.green};        
    }
`;

export default function AdminDashboard() {

    const [bodyComponent, setBodyComponent] = useState<JSX.Element>(<div/>)

    return (

        <StyledFullPage>

            <StyledBGBox />          

            <StyledFullPageContentWrapper>            

            <StyledCard width={"20%"} height={"90vh"}>

                <Link to="/">
                    <BrandTypography headlineSize={"4rem"} subHeadlineSize={"1rem"} color={defaultTheme.colors.green} alignment={"center"} />
                </Link>

                <StyledHR />

                <StyleList>  
                    
                    <StyledLI onClick={() => setBodyComponent(<AdminDashboardHome/>)}>DASHBOARD</StyledLI>
                    <StyledLI onClick={() => setBodyComponent(<div/>)}>USER</StyledLI>
                    <StyledLI onClick={() => setBodyComponent(<div/>)}>CANDIDATE</StyledLI>
                    <StyledLI onClick={() => setBodyComponent(<div/>)}>SUBMISSIONS</StyledLI>
                    <StyledLI onClick={() => setBodyComponent(<div/>)}>CAMPAIGNS</StyledLI>

                </StyleList>

                <StyledHR />

                <StyleList>  
                    
                    <StyledLI onMouseEnter={() => setBodyComponent(<div/>)}>SETTINGS</StyledLI>                    

                    <StyledLI >
                        <InternalLink endpoint={"/"} anchorText={"LOG OUT"}></InternalLink>
                    </StyledLI>    

                </StyleList>                       

                <CopyrightNotice bottom={"2em"} />

            </StyledCard>

            <StyledCard width={"70%"} height={"90vh"}>

                {bodyComponent}

            </StyledCard>

            </StyledFullPageContentWrapper>

        </StyledFullPage>
    )
}