import React from "react";
import styled from 'styled-components';
import { Link } from "react-router-dom";


const StyledLinkSmallPrint = styled(Link)`
    
    margin: auto;
    margin: 1em;
    width: 80%;
    text-align: center;
    display: inline-block;

    display: flex;
    flex-direction: column;    
    align-items: center;
    justify-content: center;  

    font-size: 12px;

    a {
        font-family: 'Muli', sans-serif;
        
    }
        
`;

const StyledLink = styled(Link)`
    
    margin: auto;
    margin: 1em;
    text-align: center;

    display: flex;
    flex-direction: column;    
    align-items: center;
    justify-content: center;      
    

    font-size: 16px;

    a {
        font-family: 'Muli', sans-serif;        
    }
    
    
`;

export default function AdditionalLinks() {

    return (
        <div>
            <StyledLinkSmallPrint to="/todo">By clicking Login, you agree to our Terms and have read and acknowledge our Privacy Statement.</StyledLinkSmallPrint>            
            <StyledLink to="/todo">Forgot password?</StyledLink>        
        </div>
    )
}