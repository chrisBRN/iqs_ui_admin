import React, { useState } from 'react';
import { postJSON } from '../../../shared/helpers/fetchJSON';
import { Redirect } from 'react-router-dom';
import LoginButton from './LoginButton';

interface LoginResponse {
    status: string,
    status_code: Number,
    information?: string,
    token?: string    
}

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
            <Redirect to="/dashboard" />
        )
    }

    return (

        <form className="login-form" method="post" onSubmit={handleLogin}>

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
                <div className="valid-message">&#10004;</div>
                <div className="invalid-message">&#10006;</div>
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
                <div className="valid-message">&#10004;</div>
                <div className="invalid-message">&#10006;</div>
            </div>

            <div className="database-message">
                {response?.information}
            </div>
            <LoginButton isLoading={loading} />

        </form>
    )
}