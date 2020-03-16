import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export interface LinkProps {
    endpoint: string
    anchorText: string    
}

export function ExternalLink(props: LinkProps) {
    return (
        <div className="external-link">
            <a  href={props.endpoint}
                target="_blank" 
                rel="noopener noreferrer">
                {props.anchorText}       
            </a>  
        </div>
    )
}

const StyledInternalLink = styled(Link)`    
    margin: auto;
    margin: 1em;
    text-align: center;  
    font-size: 16px;       
    font-weight: bold;
    color: #00BFA6;
`;

export function InternalLink(props: LinkProps) {
    return (
        <StyledInternalLink to={props.endpoint}>{props.anchorText}</StyledInternalLink>    
    )
}
