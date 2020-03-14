import React from 'react';
import CopyrightNotice from '../CopyrightNotice';
import { Link, NavLink } from 'react-router-dom';

export default function SideBar() {    

    const selectedStyle: any = {
        fontWeight: "bold"        
    };  

    return (
        <div className="sidebar">

            <div className="nav-triangle"></div>

            <h1>
                <Link className="brand-name" to="/">CoderKai</Link>
            </h1>

            <hr></hr>

            <ul>
                <NavLink to="/admin/dashboard" activeStyle={selectedStyle}><li className="card">Dashboard</li></NavLink>
                <NavLink to="/admin/user-management" activeStyle={selectedStyle}><li className="card">User</li></NavLink>
                <NavLink to="/admin/candidate-management" activeStyle={selectedStyle}><li className="card">Candidate</li></NavLink>
                <NavLink to="/admin/submissions-management" activeStyle={selectedStyle}><li className="card">Submissions</li></NavLink>
                <NavLink to="/admin/campaign-management" activeStyle={selectedStyle}><li className="card">Campaigns</li></NavLink>
            </ul>

            <hr></hr>

            <NavLink activeStyle={selectedStyle} className="card settings-button" to="/admin/settings">Settings</NavLink>
            <Link className="card log-out-button" to="/">Log Out</Link>

            <div className="footer">
                <CopyrightNotice />
            </div>

        </div>

    )
}