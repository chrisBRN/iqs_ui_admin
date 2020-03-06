import React, { ReactElement } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";

import Dashboard from '../pages/dashboard/Dashboard';
import Home from '../pages/home/Home';
import Login from '../pages/login/LoginPage';

export default function App(): ReactElement {
  return (
    <Router>
      <div>

        <Switch>

          <Route path={["/", "/login"]}>
            <Login />
          </Route>

          <Route path="/dashboard">
            <Dashboard />
          </Route>

          <Route path="/home">
            <Home />
          </Route>

        </Switch>
        
      </div>
    </Router>
  );
}