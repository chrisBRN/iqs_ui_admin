import React from 'react';

import './LoginPage.scss';

import AdditionalLinks from './parts/AdditionalLinks';
import BrandHeadline from './parts/BrandHeadline';
import LoginForm from './parts/LoginForm';
import Background from '../../shared/components/standard-background/Background';
import CopyrightNotice from '../../shared/components/CopyrightNotice';

export default function LoginPage() {

    return (
        <div className="login-page">
            <div className="page-wrapper">

                <Background />           

                <div className="content card">

                    <section><BrandHeadline /></section>
                    <section><LoginForm /></section>
                    <section><AdditionalLinks /></section>

                </div>

                <div className="footer">
                    <CopyrightNotice />
                </div>

            </div>
        </div>
    );
}