import React from 'react';

import '../../shared/styling/global-styling.scss';

import './LoginPage.scss';


import CopyrightNotice from './parts/CopyrightNotice';
import AdditionalLinks from './parts/AdditionalLinks';
import BrandHeadline from './parts/BrandHeadline';
import LoginForm from './parts/LoginForm';
import Background from '../../shared/components/standard-background/Background';

export default function LoginPage() {

    return (
        <div className="page-wrapper-login">

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
    );
}