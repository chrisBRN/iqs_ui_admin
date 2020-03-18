import React from 'react';
import styled from 'styled-components';
import { StyledCard } from '../../../../shared/styling/SharedStyles';

const StyledHeadline = styled(StyledCard)`
    
    text-align: left; 
    padding: 1em 2em; 

    margin: 1em 1em 0em;       

    h1 { 
        color: ${props => props.theme.colors.green};   
        text-transform: uppercase;    
    }  
`;

interface Props {
    headline: string;
}

export default function DashboardHeader(props: Props){
    return (
        <StyledHeadline className="Headline">
            <h1>{props.headline}</h1>
        </StyledHeadline>     
    )
}