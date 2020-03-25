import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect

} from "react-router-dom";

import { ThemeProvider } from "styled-components";

import './App.scss';
import { defaultTheme } from '../shared/styling/SharedStyles';

import HomePage from '../pages/HomePage';
import AdminDashboard from '../pages/AdminDashboard';

export default function App() {

    return (
        <ThemeProvider theme={defaultTheme}>
            
                <Router>
                    <Switch>

                        <Route exact path="/">
                            <HomePage />
                        </Route>

                        <Route exact path="/logout">
                           
                            <Redirect to="/" />
                        </Route>

                        <Route path="/admin">
                            <AdminDashboard />
                        </Route>

                    </Switch>
                </Router>
           

        </ThemeProvider>

    );
}