import React, { useState } from 'react';
import styled from 'styled-components';
import { postJSON } from '../../helpers/fetchJSON';
import { Redirect } from 'react-router-dom';
import LoginButton from './LoginButton';

import InputField from './InputsField';
import { usernameValidation, passwordValidation } from './InputFieldValidators';
import { InternalLink } from '../../helpers/Links';

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;    
    align-items: center;
    justify-content: center;    
    font-family: ${props => props.theme.fonts.main};  

    margin: auto;

    h2 {
        padding: 2em;
        font-size: 24px;  
        font-family: ${props => props.theme.fonts.main};   
        color: ${props => props.theme.colors.blue};    
    }

    .database-message {
        margin: 1em;
    }

    &:invalid > button  {            
        opacity: 0.4;
        border-bottom-width: 1px;  
    }

    &:valid > button  {  
        border-bottom-width: 1px;  
        opacity: 1;  
        border-color: ${props => props.theme.colors.green};  
        background-color: ${props => props.theme.colors.green};  
        color: ${props => props.theme.colors.offWhite};
        
        &:hover {
            border-bottom-width: 1px;  
            cursor: pointer;  
        }                
    }  

    a {
        padding: 1em;
        font-weight: bold;
        color: ${props => props.theme.colors.blue};
    }
`;

interface LoginResponse {
    status: string,
    status_code: Number,
    information?: string,
    token?: string
}

export default function LoginForm() {

    // TODO Add Database Response 

    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const [response, setResponse] = useState<LoginResponse | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const url: string = `http://localhost:8080/login`;

    const formData = {
        "username": username,
        "password": password
    }

    function handleLogin(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setResponse(null)
        setLoading(true);
        postJSON(url, formData)
            .then(response => setResponse(response))
            .then(() => setLoading(false));
    }

    if (response?.status_code === 200) {
        return (
            <Redirect to="/admin/dashboard" />
        )
    }

    return (

        <StyledForm method="post" onSubmit={handleLogin}>

            <h2>Welcome to CoderKai</h2>
            <InputField valueSetter={setUsername} validation={usernameValidation} />
            <InputField valueSetter={setPassword} validation={passwordValidation} />            
            <LoginButton isLoading={loading} />
            <InternalLink endpoint="/todo" anchorText="Forgot Password?" />

        </StyledForm>
    )
}