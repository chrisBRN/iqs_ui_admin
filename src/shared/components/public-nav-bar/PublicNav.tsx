import React from 'react';

import { Link } from 'react-router-dom';

export default function PublicNav() {

    return (
        <div className="nav-bar">            

            <h1>
                <Link className="brand-name" to="/">CoderKai</Link>
            </h1>
            
            <div className="spacer"></div>

            <ul>
                <Link to="/login"><li className="nav">Admin Login</li></Link>
                <li className="nav">Candidate Login</li>
                <li className="nav">About</li>           
            </ul>  

        </div>
    )
}