import React, { useState } from 'react';
import styled from 'styled-components';
import { postJSON } from '../../shared/helpers/fetchJSON';
import { Redirect } from 'react-router-dom';
import LoginButton from './LoginButton';
import AdditionalLinks from './AdditionalLinks';

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

    .username-input, .password-input {

        position: relative;

        label {
            font-family: 'Muli', sans-serif;
            margin: 0em;
            padding: 0em;
                
            position: absolute;               
            font-size: 12px;         
            top: 2em;       
            left: 0.75em; 
        } 

        input {
            font-family: 'Muli', sans-serif;
            font-size: 16px;
            box-sizing: border-box;
            margin: 0em;
            margin-top: 1em;  
            padding: 0.5em;
            padding-top: 2em;
            outline: 0;               
    
            width: 18em;
            height: 4em;     
        
            border: 1px solid #e1e1e5;
            border-radius: 4px;  
    
            caret-color: #F50057;
    
            background-color: rgba(232, 240, 254, 0.5);
            
            transition: border-bottom-width 0.3s ease-in-out;
    
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
            }
    
            &:invalid {
                border-color: #F50057;
            }

            &:valid~label {
                color: #00BFA6;
            }
    
            &:not(:placeholder-shown):invalid~label {
                color: #F50057;
            }   
    
            &:valid~label {
                color: #00BFA6;
            }
    
            &:not(:placeholder-shown):invalid~label {
                color: #F50057;
            }
            
        }
    }
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
            <StyledForm className="login-form2" method="post" onSubmit={handleLogin}>

                <div className="username-input">
                    <input onChange={event => setUsername(event.target.value)}
                        required
                        autoComplete="username"
                        minLength={5}
                        maxLength={30}
                        pattern="[A-Za-z0-9_]+"
                        type="text"
                        placeholder="username">
                    </input>
                    <label>Username</label>
                    {/* <div className="valid-message">&#10004;</div>
                    <div className="invalid-message">&#10006;</div> */}
                </div>

                <div className="password-input">
                    <input onChange={event => setPassword(event.target.value)}
                        required
                        autoComplete="password"
                        minLength={8}
                        maxLength={30}
                        pattern="(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\S+$).+"
                        type="password"
                        placeholder="password">
                    </input>
                    <label>Password</label>
                    {/* <div className="valid-message">&#10004;</div>
                    <div className="invalid-message">&#10006;</div> */}
                </div>

                <div className="database-message">
                    {response?.information}
                </div>
                <LoginButton isLoading={loading} />

            </StyledForm>
            <AdditionalLinks />
        </div>
    )
}