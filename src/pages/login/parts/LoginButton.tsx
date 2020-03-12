import React from "react";

interface Props {
    isLoading: boolean;
}

export default function LoginButton(props: Props) {

    return (
        <button className="sign-in-button">
            {props.isLoading ? "Loading..." : "Login"}
        </button>
    )

}