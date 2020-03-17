import React from "react";
import styled from 'styled-components';

const StyledTypography = styled.div`                 
    position: relative;     
    margin: auto;          
    display: inline-block;
    padding: 2em;  
    color: ${props => props.theme.colors.offWhite};

    h1 {
        font-family: ${props => props.theme.fonts.big};
        height: 12rem;
        font-size: 12rem;               
    }

    h2 {
        font-family: ${props => props.theme.fonts.main};
        height: 2rem;
        font-size: 2rem;               
        
        text-align: right; 
        padding-top: 1em; 
        width: 100%;
    }

    em {
        color: ${props => props.theme.colors.red}; 
    }         
`;    

export default function BigBrandTypography() {
    return (
        <StyledTypography >            
            <h1>Coder<em>Kai</em></h1>
            <h2>Get Your Ninja On
                <span role="img" aria-label="Martial Artist Emoji">🥋</span>
                <span role="img" aria-label="Laptop Emoji">💻</span>                    
            </h2>            
        </StyledTypography>
    )
}