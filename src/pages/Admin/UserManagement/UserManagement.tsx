import React from 'react';
import styled from 'styled-components';
import Headline from '../../../shared/components/Misc/Headline';
import AddUser from './AddUser';
import UserList from './UserList'
import { StyledCard } from '../../../shared/styling/SharedStyles';

const StyledContainer = styled.div`    
    position: relative;   
    display: flex;
    flex-direction: column;     
    height: calc(100vh - 11rem);
    overflow: hidden;
`;

const StyledBody = styled.div`  
      
    box-sizing: border-box;
    padding: 2rem;   

    display: flex;
    flex-direction: row; 
    flex-wrap: wrap;       
    
    ${props => props.theme.mixins.scrollBar};   
    
`;

export default function UserManagement() {

    return (

        <div>
            <Headline headline={"User Management"} />
            <StyledContainer className="container">

                <StyledBody>

                    <div className="section-container">
                        <AddUser />
                    </div>

                    <div className="section-container">
                        <UserList />
                    </div>
                    <div className="section-container">
                        <AddUser />
                    </div>
                    <div className="section-container">
                        <AddUser />
                    </div>
                    <div className="section-container">
                        <AddUser />
                    </div>
                    
                  
                </StyledBody>

            </StyledContainer>
        </div>
    )
}



