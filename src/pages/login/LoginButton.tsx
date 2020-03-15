import React from "react";
import styled from 'styled-components';

interface Props {
    isLoading: boolean;
}

export default function LoginButton(props: Props) {
    
    const StyledButton = styled.button`
        box-sizing: border-box;
        outline: 0;
        margin: 1em;
        padding: 1em;
        
        border: 1px solid #e1e1e5;
        border-radius: 4px;         

        font-size: 16px; 
        font-family: 'Muli', sans-serif;
        color: #090705;

        width: 18em;
        height: 3.5em;       
    `;

    return (
        <StyledButton>
            {props.isLoading ? "Loading..." : "Login"}
        </StyledButton>
    )
}