import React from 'react';

export interface ExternalLinkProps {
    endpoint: string
    anchorText: string    
}

export function ExternalLink(props: ExternalLinkProps) {

    return (
        <div>

            <a  
                href={props.endpoint}
                target="_blank" 
                rel="noopener noreferrer" 
            >
                {props.anchorText}       
            </a>       

        </div>
    )
}