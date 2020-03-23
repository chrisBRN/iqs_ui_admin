import React from 'react';
import Headline, { Footer } from '../../shared/components/Misc/Headline';
import AdminNavBar from '../../shared/components/Navigation/AdminNavbar';


export default function UserManagement() {

    return (     

        <div>
            <AdminNavBar/> 
            <Headline headline={"User Management"}/> 
                
                    Users
                             
            <Footer/> 
             
        </div>
    )
}