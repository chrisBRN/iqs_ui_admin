import React from "react";
import styled from 'styled-components';

export default function LandingPageSplahHeadline() {

    const ContainerStyle = styled.div`                 
        position: relative;     
        margin: auto;    
        padding-top: -2em;
    `;

    const H1Style = styled.h1`                      
        font-family: 'Neuton', serif;      
        height: 12rem;
        font-size: 12rem;                
        color: #f6f8fa;                        
    `;

    const EmStyle = styled.em`                      
        color: #F50057;           
    `;

    const H2Style = styled.h2`                      
        font-family: 'Muli', sans-serif;     
        height: 2rem;
        font-size: 2rem;               
        color: #f6f8fa;  
        text-align: right;    
        font-weight: bold;   
        width: 100%;
    `;

    return (
        <ContainerStyle className="LandingPageSplashHeadline">            
                <H1Style className="headline">Coder<EmStyle>Kai</EmStyle></H1Style>
                <H2Style className="sub-headline">Get Your Ninja On
                    <span role="img" aria-label="Martial Artist Emoji">🥋</span>
                    <span role="img" aria-label="Laptop Emoji">💻</span>                    
                </H2Style>            
        </ContainerStyle>
    )
}