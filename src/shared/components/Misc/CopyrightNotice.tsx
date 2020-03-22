import React from "react";
import styled from 'styled-components';
import { ExternalLink } from "../../helpers/Links";

interface Props {
    top? : string;
    bottom? : string;
    left? : string;
    right? : string;
}

const StyledContainer = styled.div<Props>` 
    font-size: 10px;  
    position: absolute;  

    top: ${props => props.top ? props.top : "" }; 
    bottom: ${props => props.bottom ? props.bottom : "" }; 
    left: ${props => props.left ? props.left : "" };  
    right: ${props => props.right ? props.right : "" }; 
    
    ${props => props.theme.mixins.animations.opacityPop}    
`;

export default function CopyrightNotice(props: Props) {

    const url: string = "https://github.com/chrisBRN";
    const anchor: string = "Copyright © ChrisBRN " + new Date().getFullYear()

    return (
        <StyledContainer {...props}>
            <ExternalLink endpoint={url} anchorText={anchor} />  
        </StyledContainer>   
    )
}
