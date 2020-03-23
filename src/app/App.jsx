import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch

} from "react-router-dom";

import { ThemeProvider } from "styled-components";

import './App.scss';
import { defaultTheme } from '../shared/styling/SharedStyles';

import HomePage from '../pages/HomePage';
import AdminDashboard from '../pages/AdminDashboard';
import UserManagement from '../pages/Admin/UserManagement';

export default function App() {

    return (
        <ThemeProvider theme={defaultTheme}>

            <Router >
                <Switch>                    

                    <Route exact path="/admin">
                        <AdminDashboard />
                    </Route>    

                    <Route path="/dashboard">
                        <AdminDashboard />
                    </Route>      

                    <Route path="/user-management">
                        <UserManagement />
                    </Route>    

                         

                    <Route exact path="/">
                        <HomePage />
                    </Route>

                </Switch>
            </Router>

        </ThemeProvider>

    );
}