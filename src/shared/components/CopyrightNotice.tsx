import React from "react";
import styled from 'styled-components';
import ExternalLink from "../helpers/ExternalLink";

export default function CopyrightNotice() {

    const Style = styled.div` 
        font-size: 12px;
        text-align: right; 
        bottom: 2em;
        right: 2em;
        position: absolute;         
    `;

    const url: string = "https://github.com/chrisBRN";
    const anchor: string = "Copyright © ChrisBRN " + new Date().getFullYear()

    return (        
        <Style>
            <ExternalLink endpoint={url} anchorText={anchor} />
        </Style>             
    )
}
