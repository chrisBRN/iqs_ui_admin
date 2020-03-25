import React from 'react';
import styled from 'styled-components';
import { useRouteMatch, Switch, Route, NavLink } from "react-router-dom"; 
import { LinkProps } from '../../helpers/Links';
import AdminHome from '../../../pages/Admin/AdminHome';

import UserManagement from '../../../pages/Admin/UserManagement/UserManagement';
import CandidateManagement from '../../../pages/Admin/CandidateManagement';
import CampaignManagement from '../../../pages/Admin/CampaignManagement';
import SettingsPage from '../../../pages/Admin/Settings';
import SubmissionsManagement from '../../../pages/Admin/SubmissionManagement';

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
    
    let match = useRouteMatch();

    return (
        <div>
            <StyledHeader className="admin-header">  

                <ul>                
                    <div className="home-link"><LiNavLink endpoint={`${match.url}/dashboard`} anchorText={"CoderKai"} /></div>
                    <LiNavLink endpoint={`${match.url}/user-management`} anchorText={"USER"} />           
                    <LiNavLink endpoint={`${match.url}/candidate-management`} anchorText={"CANDIDATE"} />
                    <LiNavLink endpoint={`${match.url}/submissions-management`} anchorText={"SUBMISSIONS"} />          
                    <LiNavLink endpoint={`${match.url}/campaign-management`} anchorText={"CAMPAIGNS"} />                          
                    <LiNavLink endpoint={`${match.url}/settings`} anchorText={"SETTINGS"} /> 
                    <LiNavLink endpoint={`/logout`} anchorText={"LOGOUT"} />   
                </ul>

            </StyledHeader>

            <Switch>

                <Route path={`${match.url}/dashboard`}>
                    <AdminHome/>                   
                </Route>

                <Route path={`${match.url}/user-management`}>
                    <UserManagement/>                    
                </Route>

                <Route path={`${match.url}/candidate-management`}>
                    <CandidateManagement/>                    
                </Route>

                <Route path={`${match.url}/submissions-management`}>
                    <SubmissionsManagement/>                    
                </Route>

                <Route path={`${match.url}/campaign-management`}>
                    <CampaignManagement/>                    
                </Route>

                <Route path={`${match.url}/settings`}>
                    <SettingsPage/>                    
                </Route>

            </Switch>

        </div>
    )
}

function LiNavLink(props: LinkProps) {
    return (
        <li className="styled-li">            
            <NavLink activeClassName="selected" className="nav-link" to={props.endpoint}>
                {props.anchorText}
            </NavLink>  
        </li>
    )
}