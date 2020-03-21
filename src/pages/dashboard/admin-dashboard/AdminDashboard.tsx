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
    background-color: ${props => props.theme.colors.offWhite};
    overflow: hidden;       

`;

const StyledLI = styled.div`   
    float: left; 
    color: ${props => props.theme.colors.blue};  
    padding: 1em; 

    &:hover {   
        color: ${props => props.theme.colors.blue};            
        cursor: pointer;
        font-weight: bold;     
        
        border-color: ${props => props.theme.colors.blue};

        a {
            color: ${props => props.theme.colors.blue};
        }
    }   

    a {
        color: ${props => props.theme.colors.blue};        
    }
`;

const StyledHeader = styled.div`
    width: 100%;

    display: flex;
    flex-direction: row;
    align-items: flex-end;    
    padding: 0em 2em 1em 2em;

    border: 0px solid ${props => props.theme.colors.border};
    border-bottom-width: 1px;  

`;

const brandProps: BrandTypographyProps = {
    headlineSize: "4rem",
    subHeadlineSize: "1rem",
    color: defaultTheme.colors.blue,
    alignment: "left"
};

export default function AdminDashboard() {

    const [bodyComponent, setBodyComponent] = useState<JSX.Element>(<UserManagement/>)

    return (

        <StyledPage>         

            <StyledFullPageContentWrapper>            

                <StyledHeader>

                    <Link to="/"><BrandTypography {...brandProps} /></Link> 
                       
                    <Navigation setter={setBodyComponent}/> 

                      
                    
                </StyledHeader>
                

            </StyledFullPageContentWrapper>

        </StyledPage>
    )
}

interface NavigationProps {
    setter: Function;
}

function Navigation(props: NavigationProps) {

    return (        
        <ul>   
            
            <StyledLI onClick={() => props.setter(<AdminHome/>)}>DASHBOARD</StyledLI>
            <StyledLI onClick={() => props.setter(<UserManagement/>)}>USER</StyledLI>
            <StyledLI onClick={() => props.setter(<div/>)}>CANDIDATE</StyledLI>
            <StyledLI onClick={() => props.setter(<div/>)}>SUBMISSIONS</StyledLI>
            <StyledLI onClick={() => props.setter(<div/>)}>CAMPAIGNS</StyledLI>   

            {/* <hr></hr> */}

            <StyledLI onClick={() => props.setter(<div/>)}>SETTINGS</StyledLI>       
                        
            <StyledLI>
                <InternalLink endpoint={"/"} anchorText={"LOG OUT"}></InternalLink>
            </StyledLI> 

        </ul>        
    )
}
