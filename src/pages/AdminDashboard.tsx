import React from 'react';
import { StyledFullPage, StyledFullPageContentWrapper } from '../shared/styling/SharedStyles';

import AdminNavBar from '../shared/components/Navigation/AdminNavbar';

import AdminHome from './Admin/AdminHome';
import { Footer } from '../shared/components/Misc/Headline';

export default function AdminDashboard() {   

    return (

        <StyledFullPage> 
            <StyledFullPageContentWrapper>            

                <AdminNavBar/> 
                <AdminHome/>
                <Footer/> 

            </StyledFullPageContentWrapper>
        </StyledFullPage>
    )
}