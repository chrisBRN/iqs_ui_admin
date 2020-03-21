import React from "react";
import styled from 'styled-components';

export interface BrandTypographyProps {
    headlineSize: string;
    subHeadlineSize: string;
    color?: string;
    alignment?: string;
}

const StyledTypography = styled.div<BrandTypographyProps>`                 
    display: flex;
    flex-direction: column;
    
    padding: 0rem 1rem 0rem 1rem;
    margin: 0rem 0rem -0.25rem 0rem;

    color: ${
        props => (props.color ? props.color : props.theme.colors.offWhite)    
    }; 

    h1 {   
        font-family: ${props => props.theme.fonts.big};         
        font-size: ${props => props.headlineSize};    
        min-height: ${props => props.headlineSize}; 
        line-height: ${props => props.headlineSize};      
    }

    h2 {
        font-family: ${props => props.theme.fonts.main}; 
        font-size: ${props => props.subHeadlineSize};           
        min-height: ${props => props.subHeadlineSize}; 
        line-height: ${props => props.subHeadlineSize};  
        
        text-align: ${props => props.alignment};   
    }

    strong {
        color: ${props => props.theme.colors.red};         
    }         
`;

export function BrandTypography(props: BrandTypographyProps){
    return (
        <StyledTypography {...props}>            
            <h1>Coder<strong>Kai</strong></h1>            
            <h2>Get Your Ninja On
                <span role="img" aria-label="Martial Artist Emoji">🥋</span>
                <span role="img" aria-label="Laptop Emoji">💻</span>
            </h2>
        </StyledTypography>       
    )
}