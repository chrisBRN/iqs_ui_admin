import React from 'react';
import { StyledCard } from '../../../../shared/styling/SharedStyles';

import Headline from './Headline'

import styled from 'styled-components';

const StyledBodyContainer = styled.div`   

    display: flex;
    flex-direction: column;
    justify-content: space-between;         
    overflow-x: hidden;  
    padding-bottom: 1rem;

    width: 100%;

    .spacer {
        height: 1em;
        margin-top: 1em;
    }
`;

const StyledUserManagmentBody = styled.div`    
    
    background-color:  ${props => props.theme.colors.green};
            
    width: auto;          
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;    
        
    ${props => props.theme.mixins.scrollBar};       
`

const StyledUserManagmentCard = styled(StyledCard)`    
    
    margin-top: 1em;
    margin-left: 1em;    
    filter: contrast(96%);
    border: 0;

    &:hover {
        filter: contrast(92%);
    }

    .card-label {
        position: absolute;
        top: 1em;
        left: 1em;
        background-color: ${props => props.theme.colors.blue};
        padding: 0.5em;  
        color: ${props => props.theme.colors.white}
    }
`


export default function UserManagement() {
   
    return (     
        <StyledBodyContainer>
            <Headline headline={"User Management"}/>     
            <UserManagementBody/>   
            <div className="spacer"></div>
        </StyledBodyContainer>
    )
}

function UserManagementBody(){
        return (
            <StyledUserManagmentBody>   

                <StyledUserManagmentCard height={"60em"} width={"65%"}>
                    <h2>
                        User List
                    </h2>
                </StyledUserManagmentCard>

                <StyledUserManagmentCard height={"auto"} width={"30%"}>
                    <h2>
                        User Details
                    </h2>
                </StyledUserManagmentCard>

            </StyledUserManagmentBody>
    )
}