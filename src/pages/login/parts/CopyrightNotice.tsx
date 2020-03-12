import React from "react";
import ExternalLink from "../../../shared/helpers/ExternalLink";

export default function CopyrightNotice() {

    return (
        <div className="copyright-notice-container">

            <ExternalLink
                endpoint={"https://github.com/chrisBRN"}
                anchorText={"Copyright © ChrisBRN " + new Date().getFullYear()}
            />

        </div>
    )
}