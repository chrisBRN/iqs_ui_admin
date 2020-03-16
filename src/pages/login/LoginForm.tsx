import React, { useState } from 'react';
import styled from 'styled-components';
import { postJSON } from '../../shared/helpers/fetchJSON';
import { Redirect } from 'react-router-dom';
import LoginButton from './LoginButton';
import AdditionalLinks from './AdditionalLinks';
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

    .container {
        position: relative; 
    }
`;




export default function LoginForm() {

    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");  
    const [usernameValid, setUsernameValid] = useState<boolean>(false);
    const [passwordValid, setPasswordValid] = useState<boolean>(false);  
    

    const [response, setResponse] = useState<LoginResponse | null>(null);    
    const [loading, setLoading] = useState<boolean>(false);   

    const url: string = `http://localhost:8080/login`;

    const formData = {
        "username": username,
        "password": password
    }    
   
    function handleLogin(event: React.FormEvent<HTMLFormElement>){        
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

        <div>
            <h2>Welcome to CoderKai</h2>   
            <StyledForm method="post" onSubmit={handleLogin}>
               
                <InputField valueSetter={setUsername} validitySetter={setUsernameValid} validation={usernameValidation}/>

                
                <InputField valueSetter={setPassword} validitySetter={setPasswordValid} validation={passwordValidation}/>

                <div className="database-message">
                    {response?.information}
                </div>

                <LoginButton isLoading={loading} />

            </StyledForm>

            <AdditionalLinks />

        </div>
    )
}