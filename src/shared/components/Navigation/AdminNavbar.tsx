import React from 'react';
import styled from 'styled-components';
import { useRouteMatch, Link } from "react-router-dom";import BrandTypography from "../Misc/BrandTypography";import { defaultTheme } from "../../styling/SharedStyles";
import { InternalNavLink, LinkProps } from '../../helpers/Links';

const StyledHeader = styled.div`
    
    width: 100%;      
    display: flex;
    flex-direction: row;
    align-items: center;   
    border: 0px solid ${props => props.theme.colors.border};
    border-bottom-width: 1px;      
`;

const StyledLink = styled(Link)`    
    &:hover {           
        strong, h1 {
            color: ${props => props.theme.colors.red};            
        }

        /* h2 {
            font-size: 16px;
        } */
    }    
`;

const StyledLI = styled.div`        

    .nav-link {
        color: ${props => props.theme.colors.blue};   
        padding: 2em;
        border: 0px solid ${props => props.theme.colors.red};        

        &:hover {
            font-weight: bold; 
            border-bottom-width: 4px;              
        }
    }  

    .selected {
        font-weight: bold;  
        background-color: ${props => props.theme.colors.boxFill};  
        border: 0px solid ${props => props.theme.colors.red};        
        border-bottom-width: 4px;  
    }
`;

export default function AdminNavBar() {

    // TODO Logout 

    let { url } = useRouteMatch();

    return (            
        <StyledHeader className="admin-header">  

            <StyledLink to={url}>
                <BrandTypography headlineSize={"4rem"} subHeadlineSize={"0rem"} color={defaultTheme.colors.blue} />
            </StyledLink>   
            
            <LiNavLink endpoint={`${url}/user-management`} anchorText={"USER"}/>
            <LiNavLink endpoint={`${url}/candidate-management`} anchorText={"CANDIDATE"}/>
            <LiNavLink endpoint={`${url}/submissions`} anchorText={"SUBMISSIONS"}/>
            <LiNavLink endpoint={`${url}/campaigns`} anchorText={"CAMPAIGNS"}/>
            
            <hr></hr>

            <LiNavLink endpoint={`${url}/settings`} anchorText={"SETTINGS"}/> 

        </StyledHeader>

    )
}

function LiNavLink(props: LinkProps){
    return (
        <StyledLI>
            <InternalNavLink  {...props}/>            
        </StyledLI>  
    )
}