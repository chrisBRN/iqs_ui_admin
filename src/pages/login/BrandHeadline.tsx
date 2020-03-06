import React from "react";
import ExternalLink from "../../shared/helpers/ExternalLink";

export default function BrandHeadline() {

    return (
        <h1 className="brand-name">            
            <ExternalLink
                endpoint={"https://www.coderKai.com/"}
                anchorText={"CoderKai"}
            />
        </h1>
    )
}
