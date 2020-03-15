import React from 'react';
import {
    BrowserRouter as Router,
    Route,

} from "react-router-dom";

import { AnimatedSwitch } from 'react-router-transition';

import Home from '../pages/home/Home';

import AdminDashboard from '../pages/admin/admin-dashboard/AdminDashboard';
import UserManagementPage from '../pages/admin/user-management/UserManagementPage';
import CandidateManagementPage from '../pages/admin/candidate-management/CandidateManagementPage';
import SubmissionsManagementPage from '../pages/admin/submissions-management/SubmissionsManagementPage';
import CampaignManagementPage from '../pages/admin/campaign-management/CampaignManagementPage';
import AdminSettingsPage from '../pages/admin/settings/AdminSettingsPage';

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
                    <Route path="/admin/dashboard">                        
                        <AdminDashboard />
                    </Route>

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
                    </Route>

                    <Route path="/">
                        <Home />
                    </Route>

                </AnimatedSwitch>

            </div>
        </Router>
    );
}