import React from 'react';
import {
    BrowserRouter as Router,
    Route,

} from "react-router-dom";

import { AnimatedSwitch } from 'react-router-transition';

import Dashboard from '../pages/dashboard/Dashboard';
import Home from '../pages/home/Home';
import Login from '../pages/login/LoginPage';

export default function App() {

    const supportsHistory = 'pushState' in window.history;

    return (
        <Router forceRefresh={!supportsHistory}>
            <div>
                <AnimatedSwitch
                    atEnter={{ opacity: 0 }}
                    atLeave={{ opacity: 0 }}
                    atActive={{ opacity: 1 }}
                    className="switch-wrapper"
                >
                    <Route path={["/login"]}>
                        <Login />
                    </Route>

                    <Route path="/dashboard">                        
                        <Dashboard />
                    </Route>

                    <Route path="/home">
                        <Home />
                    </Route>

                </AnimatedSwitch>

            </div>
        </Router>
    );
}