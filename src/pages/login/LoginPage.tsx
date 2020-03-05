import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import ExternalLink from '../../shared/helpers/ExternalLink';
import { UsernameInput, PasswordInput } from '../../shared/components/input/InputField';

import { postJSON } from '../../shared/helpers/fetchJSON'

import '../../shared/styling/global-styling.scss';
import './LoginPage.scss';

import { Redirect } from 'react-router-dom';

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
   
    return (
        <div>

            <form method="post" className="login-form" onSubmit={() => {}}>

                <UsernameInput/>
                <PasswordInput /> 
                <button className=" sign-in-button">Login</button>           

            </form>

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