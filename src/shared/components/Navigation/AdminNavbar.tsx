import React from 'react';
import styled from 'styled-components';
import { useRouteMatch, Link, Switch, Route } from "react-router-dom"; import BrandTypography from "../Misc/BrandTypography"; import { defaultTheme } from "../../styling/SharedStyles";
import { InternalNavLink, LinkProps } from '../../helpers/Links';

const StyledHeader = styled.div`  

    width: 100vw;        
    border-bottom: solid 1px ${props => props.theme.colors.border}; 
    
    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        overflow: hidden;
        background-color: ${props => props.theme.colors.white};       
    }    

    .home-link {
        font-family: ${props => props.theme.fonts.big};
        font-size: 2rem;
        line-height: 1rem;        
    }

    .styled-li {
        float: left;

        line-height: 1rem;    

        .nav-link {
            display: block;
            color: ${props => props.theme.colors.blue};
            font-weight: bold;
            text-align: center;
            padding: 1rem;
            text-decoration: none;
            border: 0 solid ${props => props.theme.colors.red};;          

            &:hover:not(.selected) {                
                background-color: ${props => props.theme.colors.offWhite};
                border-bottom-width: 4px;
                padding-bottom: calc(1rem - 4px);
            }

            &.selected {
                background-color: ${props => props.theme.colors.border};
            }
        }
    }
`;

export default function AdminNavBar() {

    // TODO Logout 

    let { url } = useRouteMatch();

    return (
        <div>
            <StyledHeader className="admin-header">                
                <ul>                
                    <div className="home-link"><LiNavLink endpoint={`${url}/dashboard`} anchorText={"CoderKai"} /></div>
                    <LiNavLink endpoint={`${url}/user-management`} anchorText={"USER"} />           
                    <LiNavLink endpoint={`${url}/candidate-management`} anchorText={"CANDIDATE"} />
                    <LiNavLink endpoint={`${url}/submissions`} anchorText={"SUBMISSIONS"} />          
                    <LiNavLink endpoint={`${url}/campaigns`} anchorText={"CAMPAIGNS"} />   
                       
                    <LiNavLink endpoint={`${url}/settings`} anchorText={"SETTINGS"} />  
                </ul>
            </StyledHeader>

            <Switch>
                <Route>
                    
                </Route>
            </Switch>



        </div>

    )
}

function LiNavLink(props: LinkProps) {
    return (
        <li className="styled-li">
            <InternalNavLink  {...props} />
        </li>
    )
}