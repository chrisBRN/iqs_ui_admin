import React, { useRef } from 'react';
import styled from 'styled-components';
import { InputFieldValidators } from './InputFieldValidators';

const StyledInput = styled.input` 

    box-sizing: border-box;

    font-family: ${props => props.theme.fonts.main};
    font-size: 16px;
    width: 18rem;
    height: 4rem; 
    margin: 1em 0em 0em 0em;
    padding: 2em 0.5em 0.5em 0.5em;

    border: 1px solid ${props => props.theme.colors.border};
    border-radius: 4px; 
    outline: 0;          

    caret-color: ${props => props.theme.colors.blue}; 

    background-color: ${props => props.theme.colors.autoFillBlue}; 
    transition: border-bottom-width 0.2s ease-in-out;

    &::placeholder {
        opacity: 0;       
    }         

    &:hover {        
        border-bottom-width: 4px;
        border-color: ${props => props.theme.colors.blue};
    }

    &:focus-within {
        border-bottom-width: 8px;
        border-color: ${props => props.theme.colors.blue};
    }

    &:valid {
        border-color: ${props => props.theme.colors.green};
        caret-color: ${props => props.theme.colors.green}; 
        color: ${props => props.theme.colors.green}; 

        border-width: 2px 2px 8px 2px;

        &~label {
            color: ${props => props.theme.colors.green}; 
        }

        &~.valid-message {
            color: ${props => props.theme.colors.green}; 
            opacity: 1;
            z-index: 1;
        }  
    }

    &:not(:placeholder-shown):invalid { 
        border-color: ${props => props.theme.colors.red};
        caret-color: ${props => props.theme.colors.red};
        color: ${props => props.theme.colors.red};

        border-width: 2px 2px 8px 2px;
        
        &~label {
            color: ${props => props.theme.colors.red};
        }     
        
        &~.invalid-message {
            color: ${props => props.theme.colors.red};
            opacity: 1;
            z-index: 1;
        }  
    }             
`;

const StyledLabel = styled.label`
    font-family: ${props => props.theme.fonts.main};

    font-size: 12px;    
    margin: 0em;
    padding: 0em;
    position: absolute;  
    top: 2em;       
    left: 0.75em; 
`;

const StyledInputIndicator = styled.div`
    position: absolute;
    bottom: 0.5em;      
    right: 0.5em;
    font-size: 1em;  
    z-index: -1;
    opacity: 0;  
    transition: opacity 1s linear;    
`;

const StyledFancyInputContainer = styled.div`
    position: relative; 
    width: 18em;
`;

interface Props {
    valueSetter: Function;
    validation: InputFieldValidators;
}

export default function InputField(props: Props) {

    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <StyledFancyInputContainer>

            <StyledInput
                ref={inputRef}
                onMouseEnter={() => inputRef?.current?.focus()}
                onChange={event => props.valueSetter(event.target.value)}
                required
                pattern={props.validation.pattern}
                autoComplete={props.validation.autoComplete}
                minLength={props.validation.minLength}
                maxLength={props.validation.maxLength}
                title={props.validation.title}
                type={props.validation.type}
                placeholder={props.validation.placeholder}>
            </StyledInput>

            <StyledLabel>{props.validation.placeholder}</StyledLabel>

            <StyledInputIndicator className="valid-message">&#10004;</StyledInputIndicator>
            <StyledInputIndicator className="invalid-message">&#10006;</StyledInputIndicator>

        </StyledFancyInputContainer>
    )
}
