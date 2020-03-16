import React, { useRef } from 'react';
import styled from 'styled-components';
import { InputFieldValidators } from '../interfaces/InputFieldValidators';

const StyledInput = styled.input` 

    box-sizing: border-box;

    font-family: 'Muli', sans-serif;
    font-size: 16px;
    width: 18em;
    height: 4em; 
    margin: 1em 0em 0em 0em;
    padding: 2em 0.5em 0.5em 0.5em;

    border: 1px solid #e1e1e5;
    border-radius: 4px; 
    outline: 0;          

    caret-color: #00B0FF; 

    background-color: rgba(232, 240, 254, 0.5);
    transition: border-bottom-width 0.2s ease-in-out;

    &::placeholder {
        opacity: 0;       
    }         

    &:hover {        
        border-bottom-width: 4px;
        border-color: #00B0FF;
    }

    &:focus-within {
        border-bottom-width: 8px;
        border-color: #00B0FF;
    }

    &:valid {
        border-color: #00BFA6;
        caret-color: #00BFA6; 
        border-width: 2px;

        &:label {
            color: #00BFA6;
        }

        &~.valid-message {
            color: #00BFA6;
            opacity: 1;
            z-index: 1;
        }  
    }

    &:not(:placeholder-shown):invalid {        
        border-color: #F50057;
        caret-color: #F50057; 
        border-width: 2px;

        &:label {
            color: #F50057;
        }     
        
        &~.invalid-message {
            color: #F50057;
            opacity: 1;
            z-index: 1;
        }  
    }             
`;

const StyledLabel = styled.label`
    font-family: 'Muli', sans-serif;
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
    font-size: $font-size-label;  
    z-index: -1;
    opacity: 0;  
    transition: opacity 1s linear;    
`;

interface Props {
    valueSetter: Function;
    validitySetter: Function;
    validation: InputFieldValidators;
}

export default function InputField(props: Props) {    

    const inputRef = useRef();

    function handleChange(event: any){
        props.valueSetter(event.target.value);

        let isValid: boolean = false;       

        if(inputRef.current !== null) {
            isValid = inputRef.current.reportValidity();
        }

        props.validitySetter(isValid);
    }

    return (    
        <div className="container">  

            <StyledInput ref={inputRef} onChange={event => handleChange(event)}
                required
                autoComplete={props.validation.autoComplete} 
                minLength={props.validation.minLength} 
                maxLength={props.validation.maxLength} 
                pattern={props.validation.pattern} 
                title={props.validation.title} 
                type={props.validation.type} 
                placeholder={props.validation.placeholder}>
            </StyledInput> 

            {/* <StyledLabel>{props.validation.placeholder}</StyledLabel>

            <StyledInputIndicator>
                {validity ? <div>&#10004;</div> : <div>&#10006;</div>}
            </StyledInputIndicator> */}
                     
        </div>          
    )
}
