import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch

} from "react-router-dom";

import { ThemeProvider } from "styled-components";

import './App.scss';
import { defaultTheme } from '../shared/styling/SharedStyles';

import HomePage from '../pages/home/HomePage';
import AdminDashboard from '../pages/dashboard/admin-dashboard/AdminDashboard';

export default function App() {

    return (
        <ThemeProvider theme={defaultTheme}>

            <Router >
                <Switch>

                    <Route path="/admin/dashboard">
                        <AdminDashboard />
                    </Route>

                    <Route path="/">
                        <HomePage />
                    </Route>

                </Switch>
            </Router>

        </ThemeProvider>

    );
}