import React from 'react';
import styled from 'styled-components';

const StyledHeadline = styled.div`

    box-sizing: border-box; 

    background-color: ${props => props.theme.colors.border};
    width: 100%; 
    min-height: 5rem;  
    padding: 1em 0em; 
    border-bottom: solid 1px ${props => props.theme.colors.border}; 
    
    display: flex;
    flex-direction: row;           
    
    .spacer {
        width: 10%;
        margin: 1em;         
    }

    h1 {
        color: ${props => props.theme.colors.offBlack}; 
        text-transform: uppercase;
        font-family: ${props => props.theme.fonts.big};    
    }      
`;

interface Props {
    headline: string;
}

export default function Headline(props: Props){
    return (
        <StyledHeadline className="Headline">       
            <div className="spacer"></div>     
            <h1>{props.headline}</h1>
        </StyledHeadline>     
    )
}