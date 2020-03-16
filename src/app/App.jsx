import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch

} from "react-router-dom";

import './App.scss';

import HomePage from '../pages/home/HomePage';
import AdminDashboard from '../pages/admin/admin-dashboard/AdminDashboard';

export default function App() {   

    return (
        <Router >
            <div>
                <Switch>
                    <Route path="/admin/dashboard">                        
                        <AdminDashboard />
                    </Route>
{/* 
                    <Route path="/admin/user-management">                        
                        <UserManagementPage />
                    </Route>

                    <Route path="/admin/candidate-management">                        
                        <CandidateManagementPage />
                    </Route>

                    <Route path="/admin/submissions-management">                        
                        <SubmissionsManagementPage />
                    </Route>

                    <Route path="/admin/campaign-management">                        
                        <CampaignManagementPage />
                    </Route>

                    <Route path="/admin/settings">                        
                        <AdminSettingsPage />
                    </Route> */}

                    <Route path="/">
                        <HomePage />
                    </Route>

                </Switch>

            </div>
        </Router>
    );
}