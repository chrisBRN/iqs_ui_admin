import React, { useState, useContext } from 'react';

import { Link, Redirect } from 'react-router-dom';
import ExternalLink from '../../shared/helpers/ExternalLink';
// import { UsernameInput, PasswordInput } from '../../shared/components/input/InputField';

import '../../shared/styling/global-styling.scss';
import './LoginPage.scss';
import { postJSON } from '../../shared/helpers/fetchJSON';

export default function Login() {

    return (
        <div className="login-page-wrapper">

            <div className="content card">

                <section><BrandHeadline /></section>
                <section><LoginForm /></section>
                <section><AdditionalLinks /></section>

            </div>

            <div className="footer">
                <CopyrightNotice />
            </div>

        </div>
    );
}

function LoginForm() {

    const [error, setError] = useState<boolean>(false);
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
  
    let token: string = "";

    async function handleLoginSubmission(event: React.FormEvent<HTMLFormElement>) {

        event.preventDefault();

        const formData = { "username": username, "password": password }

        try {
            const jsonResponse = await postJSON(`http://localhost:8080/login`, formData)
            token = jsonResponse.token;
           
        } catch (error) {
            setError(true)
            
            console.log('Error', error);
        }
    }

    if (token !== "") {
        return (<Redirect to="/dashboard" />)
    }

    return (

        <form method="post" className="login-form" onSubmit={handleLoginSubmission}>

            <div className="username-input">

                <label> username </label>
                <input onChange={event => setUsername(event.target.value)}
                    required
                    minLength={5}
                    maxLength={30}
                    pattern="[A-Za-z0-9_]+"
                    type="text"
                    placeholder="username">
                </input>
                <ValidityMessages />

            </div>

            <div className="password-input">

                <label> password </label>
                <input onChange={event => setPassword(event.target.value)}
                    required
                    minLength={7}
                    maxLength={30}
                    pattern="(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\S+$).+"
                    type="password"
                    placeholder="password">
                </input>
                <ValidityMessages />

            </div>

            <button className="sign-in-button">Login</button>

        </form>
    )
}

function ValidityMessages() {
    return (
        <div>
            <div className="invalid-message">
                {"invalid"}
            </div>
            <div className="valid-message">
                {"valid"}
            </div>
        </div>
    )
}

function BrandHeadline() {

    return (
        <h1 className="brand-name">
            <ExternalLink
                endpoint={"https://www.coderKai.com/"}
                anchorText={"CoderKai"}
            />
        </h1>
    )
}

function AdditionalLinks() {
    return (
        <div className="links">
            <div className="additional-link privacy-statement">
                <Link className="small-print" to="/todo">By clicking Login, you agree to our Terms and have read and acknowledge our Privacy Statement.</Link>
            </div>

            <div className="additional-link">
                <Link className="mid-print forgot-password" to="/todo">Forgot password?</Link>
            </div>

            <div className="additional-link">
                <Link className="mid-print candidate-login" to="/todo">Candidate? Login Here</Link>
            </div>
        </div>
    )
}

function CopyrightNotice() {

    return (
        <div className="copyright-notice-container">

            <ExternalLink
                endpoint={"https://github.com/chrisBRN"}
                anchorText={"Copyright © ChrisBRN " + new Date().getFullYear()}
            />

        </div>
    )
}