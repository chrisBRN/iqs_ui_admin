import React from 'react';

import '../../shared/styling/global-styling.scss';

import './LoginPage.scss';

import CopyrightNotice from './CopyrightNotice';
import AdditionalLinks from './AdditionalLinks';
import BrandHeadline from './BrandHeadline';
import LoginForm from './LoginForm';

export default function LoginPage() {

    return (
        <div className="login-page-wrapper">
            <div className="login-background"></div>

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