import React from "react";
import styled from 'styled-components';

export default function DiagonalBackroundBox() {

    const BackgroundBoxStyle = styled.div` 
        background-color: #00BFA6;          
        width: 70%; 
        height: 100vh;
        position: absolute;
        left: -10%;
        overflow: hidden;        
        transform: skew(8deg);              
    `;

    return (     
        <BackgroundBoxStyle className="diagonal-background-box"></BackgroundBoxStyle>        
    )
}