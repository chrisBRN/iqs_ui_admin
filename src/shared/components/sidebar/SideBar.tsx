import React from 'react';
import CopyrightNotice from '../../../pages/login/CopyrightNotice';
import { Link } from 'react-router-dom';

export default function Dashboard() {

    return (  
        <div className="sidebar">

            <div className="triangle"></div>
           
           <h1><Link className="brand-name" to="/dashboard">CoderKai</Link></h1>           

           <hr></hr>  

            <ul>      
                <li className="card">Dashboard</li>
                <li className="card">Users</li>   
                <li className="card">Candidates</li>  
                <li className="card">Submissions</li> 
                <li className="card">Campaigns</li> 
                 
            </ul>   

            <hr></hr>           

            

            <Link className="card log-out-button" to="/login">Log Out</Link>

            <div className="footer">  
                <CopyrightNotice />
            </div>

        </div>
        
    )
}