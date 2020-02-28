import React from 'react';

export interface ExternalLinkProps {
    endpoint: string
    anchorText: string    
}

export default function ExternalLink(props: ExternalLinkProps) {

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