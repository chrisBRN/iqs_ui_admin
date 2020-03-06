import React from "react";
import { Link } from "react-router-dom";

export default function AdditionalLinks() {
    return (
        <div className="links">
            <div className="additional-link privacy-statement">
                <Link className="small-print" to="/todo">By clicking Login, you agree to our Terms and have read and acknowledge our Privacy Statement.</Link>
            </div>

            <div className="additional-link">
                <Link className="mid-print forgot-password" to="/todo">Forgot password?</Link>
            </div>

            <div className="additional-link">
                <Link className="mid-print candidate-login" to="/todo">Candidate? Login Here</Link>
            </div>
        </div>
    )
}