import React from 'react';

import './UserManagementPage.scss';

import Background from '../../../shared/components/standard-background/Background';
import SideBar from '../../../shared/components/sidebar/SideBar';
import '../../../shared/components/sidebar/SideBar.scss';

export default function UserManagement() {

    return (

        <div className="user-management-page">
            <div className="page-wrapper">

                <Background />
                <SideBar />

                <div className="main-section">                  

                </div>

            </div>

        </div>
    )
}