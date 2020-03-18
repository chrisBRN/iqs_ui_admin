import React from "react";
import styled from 'styled-components';

export interface BrandTypographyProps {
    headlineSize: string;
    subHeadlineSize: string;
    color?: string;
    alignment?: string;
}

const StyledTypography = styled.div<BrandTypographyProps>`                 
    position: relative;     
    margin: auto;          
    display: inline-block;
    padding: 0em 2em 0em 2em;      

    color: ${
        props => (props.color ? props.color : props.theme.colors.offWhite)    
    }; 

    h1 {
        font-family: ${props => props.theme.fonts.big}; 
        height: ${props => props.headlineSize}; 
        font-size: ${props => props.headlineSize};       
    }

    h2 {
        font-family: ${props => props.theme.fonts.main};    
        height: ${props => props.subHeadlineSize};
        font-size: ${props => props.subHeadlineSize};
        
        text-align: ${
            props => (props.alignment ? props.alignment : "right")    
        };  
        padding-top: 1em; 

        width: 100%;
    }

    em {
        color: ${props => props.theme.colors.red}; 
    }         
`;

export function BrandTypography(props: BrandTypographyProps){
    return (
        <StyledTypography {...props}>
            <h1>Coder<em>Kai</em></h1>
            <h2>Get Your Ninja On
                <span role="img" aria-label="Martial Artist Emoji">🥋</span>
                <span role="img" aria-label="Laptop Emoji">💻</span>
            </h2>
        </StyledTypography>       
    )
}