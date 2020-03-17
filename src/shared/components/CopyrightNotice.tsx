import React from "react";
import styled from 'styled-components';
import { ExternalLink } from "../helpers/Links";

const Style = styled.div` 
    font-size: 12px;
    text-align: right; 
    position: absolute;  
    bottom: 2em;
    right: 2em;    

    opacity: 0.8;

    &:hover {
        opacity: 1;
    }
`;

export default function CopyrightNotice() {   

    const url: string = "https://github.com/chrisBRN";
    const anchor: string = "Copyright © ChrisBRN " + new Date().getFullYear()

    return (
        <Style>
            <ExternalLink endpoint={url} anchorText={anchor} />
        </Style>
    )
}
