import React, { useState } from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import { postJSON } from '../../shared/helpers/fetchJSON';
import { Redirect } from 'react-router-dom';
import LoginButton from './LoginButton';

import InputField from '../../shared/components/InputsField';
import { usernameValidation, passwordValidation } from '../../shared/interfaces/InputFieldValidators';

interface LoginResponse {
    status: string,
    status_code: Number,
    information?: string,
    token?: string
}

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;    
    align-items: center;
    justify-content: center;    

    h2 {
        padding: 1em;
        font-size: 24px;        
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
        border-color: #00BFA6;
        background-color: #00BFA6;   
        color: #f6f8fa;
        
        &:hover {
            border-bottom-width: 1px;  
            cursor: pointer;  
        }                
    }  
   
`;

const StyledLinkSmallPrint = styled(Link)`
    
    margin: auto;
    margin: 1em;
    width: 80%;

    text-align: center;
    display: inline-block;   

    font-size: 10px;  
        
`;

const StyledLink = styled(Link)`
    
    margin: auto;
    margin: 1em;
    text-align: center;    

    font-size: 16px;   
    
`;

export default function LoginForm() {

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

            <div className="database-message">
                {response?.status_code !== 200 ? response?.information : response?.information}
            </div>

            <LoginButton isLoading={loading} />
            <StyledLinkSmallPrint to="/todo">By clicking Login, you agree to our Terms and have read and acknowledge our Privacy Statement.</StyledLinkSmallPrint>            
            <StyledLink to="/todo">Forgot password?</StyledLink>  

        </StyledForm>
    )
}