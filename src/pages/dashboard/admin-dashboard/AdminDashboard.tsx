import React, { useState } from 'react';
import styled from 'styled-components';

import { StyledFullPage, StyledFullPageContentWrapper, StyledCard, defaultTheme, StyledHR } from '../../../shared/styling/SharedStyles';
import { BrandTypography, BrandTypographyProps } from '../../home/parts/StatementTypography';
import { Link } from 'react-router-dom';
import CopyrightNotice from '../../../shared/components/CopyrightNotice';
import { InternalLink } from '../../../shared/helpers/Links';

import AdminHome from './parts/AdminHome';
import UserManagement from './parts/UserManagement';

const StyledPage = styled(StyledFullPage)`
    background-color: ${props => props.theme.colors.blue};
    overflow: hidden;   
`;

const StyleList = styled.ul`    
    width: 80%;       
    margin: 1em;
    text-transform: uppercase;  
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const StyledLI = styled.div`    

    background-color: ${props => props.theme.colors.white};
    color: ${props => props.theme.colors.green};    

    box-sizing: border-box;        
    width: 100%;        
    
    border: 0px solid ${props => props.theme.colors.boxFill};
    
    padding: 1em 2em 1em 2em;    

    &:hover {
        background-color: ${props => props.theme.colors.boxFill};
        color: ${props => props.theme.colors.green};            
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

const StyledBody = styled(StyledCard)`
    background-color: ${props => props.theme.colors.green};  
    border: 0;
`

const StyledSideBar = styled(StyledCard)`
    margin: 2em;    
    padding: 2em;  
`;

const brandProps: BrandTypographyProps = {
    headlineSize: "4rem",
    subHeadlineSize: "1rem",
    color: defaultTheme.colors.green,
    alignment: "center"
};

export default function AdminDashboard() {

    const [bodyComponent, setBodyComponent] = useState<JSX.Element>(<UserManagement/>)

    return (

        <StyledPage>         

            <StyledFullPageContentWrapper>            

                <StyledSideBar width={"20%"} height={"90vh"} shadowPop>
                    <Link to="/">
                        <BrandTypography {...brandProps} />
                    </Link>         
                    <Navigation setter={setBodyComponent}/> 
                    <CopyrightNotice bottom={"2em"} />
                </StyledSideBar>

                <StyledBody width={"100%"} height={"90vh"}>
                    {bodyComponent}
                </StyledBody>

            </StyledFullPageContentWrapper>

        </StyledPage>
    )
}

interface NavigationProps {
    setter: Function;
}

function Navigation(props: NavigationProps) {

    return (        
        <StyleList>              

            <StyledHR />
            
            <StyledLI onClick={() => props.setter(<AdminHome/>)}>DASHBOARD</StyledLI>
            <StyledLI onClick={() => props.setter(<UserManagement/>)}>USER</StyledLI>
            <StyledLI onClick={() => props.setter(<div/>)}>CANDIDATE</StyledLI>
            <StyledLI onClick={() => props.setter(<div/>)}>SUBMISSIONS</StyledLI>
            <StyledLI onClick={() => props.setter(<div/>)}>CAMPAIGNS</StyledLI>
            
            <StyledHR />

            <StyledLI onClick={() => props.setter(<div/>)}>SETTINGS</StyledLI>                    

            <StyledLI >
                <InternalLink endpoint={"/"} anchorText={"LOG OUT"}></InternalLink>
            </StyledLI>    

        </StyleList>        
    )
}
