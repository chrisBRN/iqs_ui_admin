import React, { useState, useEffect } from 'react';
import { postJSON } from '../../shared/helpers/fetchJSON';
import { Redirect } from 'react-router-dom';
import LoginButton from './LoginButton';

interface LoginStatus {
    status: string,
    status_code: Number,
    information?: string,
    token?: string    
}

export default function LoginForm() {

    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [response, setResponse] = useState<LoginStatus | null>(null);
    const [success, setSuccuss] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);  

    const url: string = `http://localhost:8080/login`;

    const formData = {
        "username": username,
        "password": password
    }

    async function handleLoginSubmission(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();  
        setLoading(true);    
        setResponse(await postJSON(url, formData));
        setLoading(false); 
    }    

    useEffect(() => {
        
        if (response !== null && response.status_code === 200) {
            setSuccuss(true);
        }

    }, [response])

    if(success){
        return (
            <Redirect to="/dashboard" />
        )
    }

    return (

        <form className="login-form" method="post" onSubmit={handleLoginSubmission}>

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

            <LoginButton isLoading={loading} />

        </form>
    )
}