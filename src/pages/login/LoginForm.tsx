import React, { useState } from 'react';
import { postJSON } from '../../shared/helpers/fetchJSON';


export default function LoginForm() {
    
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");     

    async function handleLoginSubmission(event: React.FormEvent<HTMLFormElement>) {

        event.preventDefault();

        const formData = { "username": username, "password": password }

        try {
            const jsonResponse = await postJSON(`http://localhost:8080/login`, formData)
            const token: any = jsonResponse.token;
           
        } catch (error) {                   
            console.log('Error', error);
        }   
    }

    return (

        <form method="post" className="login-form" onSubmit={handleLoginSubmission}>

            <div className="username-input">
                <label>username</label>
                <input onChange={event => setUsername(event.target.value)}
                    required
                    minLength={5}
                    maxLength={30}
                    pattern="[A-Za-z0-9_]+"
                    type="text"
                    placeholder="username">
                </input>
                <div className="invalid-message">invalid</div>
                <div className="valid-message">valid</div>
            </div>

            <div className="password-input">
                <label>password</label>
                <input onChange={event => setPassword(event.target.value)}
                    required
                    minLength={7}
                    maxLength={30}
                    pattern="(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\S+$).+"
                    type="password"
                    placeholder="password">
                </input>
                <div className="invalid-message">invalid</div>
                <div className="valid-message">valid</div>
            </div>

            <button className="sign-in-button">Login</button>

        </form>
    )
}
