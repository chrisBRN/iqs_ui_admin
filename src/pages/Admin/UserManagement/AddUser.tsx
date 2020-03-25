import React, { useState, useRef } from 'react';
import styled from 'styled-components';

import InputField from '../../../shared/components/Input/InputsField';
import { usernameValidation, emailValidation, roleValidation, passwordValidator } from '../../../shared/components/Input/InputFieldValidators';
import FormButton, { ButtonWithMessage } from '../../../shared/components/Input/FormButton';
import { postJSON } from '../../../shared/helpers/fetchJSON';
import { Redirect } from 'react-router-dom';
import ExpandingCard from '../../../shared/components/Misc/ExpandingCard';

const StyledContainer = styled.div`    
        
    background-color: ${props => props.theme.colors.white};
    border: 1px solid ${props => props.theme.colors.border};           
    box-shadow: 1px 1px 4px 0 rgba(0,0,0,0.01); 
    ${props => props.theme.mixins.animations.boxShadowPop};  

    display: flex;
    flex-direction: column;    
    align-items: center;
    justify-content: center;  
    position: relative;   

    height: auto;
    width: auto;

    padding: 2rem;  
    margin: 2rem;
  
    .form-title {             
        font-size: 20px;  
        font-family: ${props => props.theme.fonts.main};   
        color: ${props => props.theme.colors.blue};   
    }

    .expander {
        content: '';
        position: absolute;
        top: 0rem;
        right: 0rem;
        border-color: transparent;
        border-style: solid;
        border-right-color: ${props => props.theme.colors.border};  
        border-top-color: ${props => props.theme.colors.border};  
        border-width: 1em;       
    }    

    .noForm {      
        transition: opacity 0.25s ease, height 0.25s ease-in-out, width 0.25s ease-in-out;    
        opacity: 0; 
        overflow: hidden;
        height: 0rem;   
        width: 0rem;
    }

    .add-user-form {  
        transition: opacity 1.5s ease, height 0.5s ease-in-out, width 0.5s ease-in-out;
        opacity: 1;
        height: calc((4rem * 5) + 8rem);   
        width: 18rem;
            
        padding: 0em 2em;       

        &:invalid > button  {            
            opacity: 0.4;
            border-bottom-width: 1px;  
        }

        &:valid > button  {  
            border-bottom-width: 1px;  
            opacity: 1;  
            border-color: ${props => props.theme.colors.green};  
            background-color: ${props => props.theme.colors.green};  
            color: ${props => props.theme.colors.offWhite};
            
            &:hover {
                border-bottom-width: 1px;  
                cursor: pointer;  
            }                
        }     
    }
`;

interface AddUserResponse {
    status: string,
    status_code: Number,
    information?: string,
    added_user?: User,
}

interface User {
    username: string,
    role: string,
    email: string,
    password: string
}

export default function AddUser() {

    const formRef = useRef<HTMLFormElement>(null);

    const [sizeToggle, setSizeToggle] = useState<boolean>(false);

    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [role, setRole] = useState<string>("");

    const [response, setResponse] = useState<AddUserResponse | null>(null);
    const [buttonText, setButtonText] = useState<string>("Add User");
    const [loading, setLoading] = useState<boolean>(false);

    


    const formData = {
        "username": username,
        "password": password,
        "email": email,
        "role": role,
    }

    const url: string = `http://localhost:8080/admin/add-user`;

    function handleAddUser(event: React.FormEvent<HTMLFormElement>) {

        event.preventDefault();
        setResponse(null)
        setLoading(true);
        postJSON(url, formData, "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiQURNSU4iLCJpc3MiOiJDaHJpc0JSTiIsImV4cCI6MTU4NTQwMzg4OSwiZW1haWwiOiJhQGEuY29tIiwidXNlcm5hbWUiOiJBZG1pbiJ9.RlXJwJva9gF6HTG5rMBXDeKy-T0Ro9Y756CzHRF2D0M")
            .then(response => setResponse(response))
            .then(() => setLoading(false));
    }

    if (response?.status_code) {

        let statusCode = response.status_code;
        let information = response.information;

        switch (statusCode) {

            case 200: setButtonText("Add User");
                formRef?.current?.reset();
                break;
            case 400: setButtonText("Failure"); break;
            case 403: setButtonText("Unauthorised");

                if (information === "please log in") {
                    return (
                        <Redirect to="/logout" />
                    )
                }

                break;
        }
        setResponse(null);
    }

    return (
        <ExpandingCard description={"ADD A USER"} content={<AddUserForm />} />

        // <StyledContainer>

        //     <h3 className="form-title">ADD A USER</h3>

        //     <div className="expander" onClick={() => setSizeToggle(!sizeToggle)}></div>

        //     <form 
        //         ref={formRef}
        //         className={sizeToggle ? "add-user-form" : "noForm"} 
        //         method="post" 
        //         onSubmit={handleAddUser}>

        //         <InputField valueSetter={setUsername} validation={usernameValidation} />
        //         <InputField valueSetter={setPassword} validation={passwordValidator("text")} />
        //         <InputField valueSetter={setEmail} validation={emailValidation} />
        //         <InputField valueSetter={setRole} validation={roleValidation} />

        //         <FormButton isLoading={loading} text={buttonText} />

        //     </form>

        // </StyledContainer>
    )
}

function AddUserForm() {

    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [role, setRole] = useState<string>("");

    const [buttonText, setButtonText] = useState<string>("Add User");



    function handleSubmit() {
        setButtonText("Loading...");
    }

    return (
        <form
            // ref={formRef}            
            method="post"
            onSubmit={() => handleSubmit}>

            <InputField valueSetter={setUsername} validation={usernameValidation} />
            <InputField valueSetter={setPassword} validation={passwordValidator("text")} />
            <InputField valueSetter={setEmail} validation={emailValidation} />
            <InputField valueSetter={setRole} validation={roleValidation} />

            <ButtonWithMessage buttonText={buttonText} />

        </form>
    )
}
