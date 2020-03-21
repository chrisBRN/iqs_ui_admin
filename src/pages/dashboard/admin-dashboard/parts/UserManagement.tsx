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
    box-sizing: content-box;

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
    flex-direction: column;    
    flex-wrap: wrap;
    justify-content: space-between;        
    padding: 1em;
        
    ${props => props.theme.mixins.scrollBar};       
`

const StyledUserManagmentCard = styled(StyledCard)`  
    
    margin: 0em 1em 0em 0em;
    border: 0;    

    flex-shrink: 1;

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

                <StyledUserManagmentCard height={"auto"} width={"auto"}>

                    <h2>
                        Add User
                    </h2>
{/* 
                    <StyleList>      

                        <StyledLI onClick={() => props.setter(<div/>)}>DASHBOARD</StyledLI>
                        <StyledLI onClick={() => props.setter(<div/>)}>USER</StyledLI>
                        <StyledLI onClick={() => props.setter(<div/>)}>CANDIDATE</StyledLI>
                        <StyledLI onClick={() => props.setter(<div/>)}>SUBMISSIONS</StyledLI>
                        <StyledLI onClick={() => props.setter(<div/>)}>CAMPAIGNS</StyledLI>                      

                    </StyleList>        */}



                </StyledUserManagmentCard>

                <StyledUserManagmentCard height={"80vh"} width={"40%"}>
                    <h2>
                        Main Body
                    </h2>
                </StyledUserManagmentCard>                

            </StyledUserManagmentBody>
    )
}

interface UserProps_Client {
    "username": string;
    "role": string;
    "email": string;
    "password": string;
}

const user1 = {
    "username": "Alan",
    "role":  "Admin",
    "email":  "a@a.com",
    "password":  "1234",
}


function createUser(props: UserProps_Client){
    return {
        "username": props.username,
        "role":  props.role,
        "email":  props.email,
        "password":  props.password,
    }
}
