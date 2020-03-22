import React from "react";
import styled from 'styled-components';

const StyledTypography = styled.div<Props>`  
    
    display: flex;
    flex-direction: column;
    
    padding: 0.25rem 2em;        
    margin-bottom: 0.75rem;     

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

interface Props {
    headlineSize?: string;
    subHeadlineSize?: string;
    color?: string;
    alignment?: string;
}

export default function BrandTypography(props: Props){
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