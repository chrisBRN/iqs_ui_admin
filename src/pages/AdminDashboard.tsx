import React from 'react';
import { StyledFullPage, StyledFullPageContentWrapper } from '../shared/styling/SharedStyles';

import AdminNavBar from '../shared/components/Navigation/AdminNavbar';

export default function AdminDashboard() {   

    return (

        <StyledFullPage> 
            <StyledFullPageContentWrapper>            

                <AdminNavBar/>    
                

            </StyledFullPageContentWrapper>
        </StyledFullPage>
    )
}