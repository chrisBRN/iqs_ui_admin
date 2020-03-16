import React from "react";
import styled from 'styled-components';
import { Link } from "react-router-dom";


const StyledLinkSmallPrint = styled(Link)`

    width: 80%;
    margin: auto;
    margin-top: 1em;

    a {
        font-family: 'Muli', sans-serif;
    }
    
    
`;

const StyledLink = styled(Link)`

    width: 80%;
    margin: auto;
    margin-top: 1em;

    a {
        font-family: 'Muli', sans-serif;
    }
    
    
`;

export default function AdditionalLinks() {





    return (
        <div className="links">
            <div className="additional-link privacy-statement">
                <Link className="small-print" to="/todo">By clicking Login, you agree to our Terms and have read and acknowledge our Privacy Statement.</Link>
            </div>

            <div className="additional-link">
                <Link className="mid-print forgot-password" to="/todo">Forgot password?</Link>
            </div>
        </div>
    )
}