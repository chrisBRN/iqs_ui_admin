import React from "react";
import styled from 'styled-components';

export const StyledDiagonalBackgroundBox = styled.div` 
    background-color: ${props => props.theme.colors.green};         
    width: 100vh; 
    height: 100vh;
    position: absolute;
    left: 0;
    top: 0;
    overflow: hidden;        
    transform: skew(8deg);         
`;

export function DiagonalBackroundBox() {

    return (
        <StyledDiagonalBackgroundBox></StyledDiagonalBackgroundBox>
    )
}