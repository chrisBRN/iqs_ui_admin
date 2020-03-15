import React from "react";
import styled from 'styled-components';

export default function BigBrandTypography() {

    const StyledContainer = styled.div`                 
        position: relative;     
        margin: auto;          
        display: inline-block;
        padding: 2em;  
    `;

    const StyledH1 = styled.h1`                      
        font-family: 'Neuton', serif;      
        height: 12rem;
        font-size: 12rem;                
        color: #f6f8fa;                        
    `;

    const StyledEm = styled.em`                      
        color: #F50057;           
    `;

    const StyledH2 = styled.h2`                      
        font-family: 'Muli', sans-serif;     
        height: 2rem;
        font-size: 2rem;               
        color: #f6f8fa;  
        text-align: right;    
        font-weight: bold;   
        width: 100%;
    `;

    return (
        <StyledContainer className="big-brand-typography">            
                <StyledH1>Coder<StyledEm>Kai</StyledEm></StyledH1>
                <StyledH2>Get Your Ninja On
                    <span role="img" aria-label="Martial Artist Emoji">🥋</span>
                    <span role="img" aria-label="Laptop Emoji">💻</span>                    
                </StyledH2>            
        </StyledContainer>
    )
}