import React from "react";
import styled from 'styled-components';

import { Link } from 'react-router-dom';

export default function PublicNav() {

    const NavContainerStyle = styled.div` 
        position: absolute;
        top: 2em;
        right: 4em;
    `;

  

    const ListItemStyle = styled.li`
        display: inline-block;
        padding: 1em;
        text-transform: uppercase;

        &:hover {            
            cursor: pointer;       
            font-weight: bold;                                    
        } 
           
    `;

   

    return (
        <NavContainerStyle className="public-nav-bar">
            <ul>
                <Link to="/login"><ListItemStyle className="nav-item">Admin Login</ListItemStyle></Link>
                <ListItemStyle className="nav-item">Candidate Login</ListItemStyle>
                <ListItemStyle className="nav-item">About</ListItemStyle>
            </ul>

        </NavContainerStyle>
    )
}