import React from 'react';
import { StyledFullPage, StyledFullPageContentWrapper } from '../shared/styling/SharedStyles';

import AdminNavBar from '../shared/components/Navigation/AdminNavbar';

import AdminHome from './AdminHome';

export default function AdminDashboard() {   

    return (

        <StyledFullPage> 
            <StyledFullPageContentWrapper>            

                <AdminNavBar/> 
                <AdminHome/>

            </StyledFullPageContentWrapper>
        </StyledFullPage>
    )
}