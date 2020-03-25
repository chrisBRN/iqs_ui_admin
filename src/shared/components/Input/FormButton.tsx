import React from "react";
import styled from 'styled-components';

interface Props {
    isLoading: boolean;
    text: string;
}

const StyledButton = styled.button`
    box-sizing: border-box;
    outline: 0;
    margin-top: 1em;   
    padding: 1em;
    
    border: 1px solid ${props => props.theme.colors.border};
    border-radius: 4px;         

    font-size: 16px; 
    font-family: ${props => props.theme.fonts.main};  
    color: ${props => props.theme.colors.offBlack};  
    font-weight: bold;

    width: 18em;
    height: 3.5em;       
`;

export default function FormButton(props: Props) {
    return (
        <StyledButton className="form-button">
            {props.isLoading ? "Loading..." : props.text}
        </StyledButton>
    )
}

interface ButtonProps {  
    buttonText: string;
}

export function ButtonWithMessage(props: ButtonProps) {
    return (
        <StyledButton className="button-with-message">
            {props.buttonText}
        </StyledButton>
    )
}