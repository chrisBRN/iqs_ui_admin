import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export interface LinkProps {
    endpoint: string
    anchorText: string    
}

const StyledInternalLink = styled(Link)`    
    margin: auto;    
    text-align: center;  
    font-size: 16px;      
`;

export function ExternalLink(props: LinkProps) {
    return (        
        <a  href={props.endpoint}
            target="_blank" 
            rel="noopener noreferrer">
            {props.anchorText}       
        </a>         
    )
}

export function InternalLink(props: LinkProps) {
    return (
        <StyledInternalLink to={props.endpoint}>{props.anchorText}</StyledInternalLink>    
    )
}
