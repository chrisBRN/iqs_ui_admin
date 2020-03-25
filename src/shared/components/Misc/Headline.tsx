import React from 'react';
import styled from 'styled-components';

const StyledHeadline = styled.div`
    background-color: ${props => props.theme.colors.border};
    box-sizing: border-box;         
    width: 100%; 
    min-height: 4rem;     
    border-bottom: solid 1px ${props => props.theme.colors.border}; 

    display: flex;
    flex-direction: column;
    justify-content: center;   
    align-items: center;    

    h1 {       
        width: 70%;
        color: ${props => props.theme.colors.blue}; 
        font-family: ${props => props.theme.fonts.headline};    
        font-size: 2rem;
        line-height: 2rem;
        
        text-transform: uppercase;         
    }     

    .footer {
        position: absolute;
        bottom: 0;
    } 
`;

interface Props {
    headline: string;
}

export default function Headline(props: Props){
    return (
        <StyledHeadline className="headline">   
            <h1>{props.headline}</h1>    
        </StyledHeadline>     
    )
}

export function Footer(){
    return (
        <StyledHeadline className="footer">                
        </StyledHeadline>     
    )
}