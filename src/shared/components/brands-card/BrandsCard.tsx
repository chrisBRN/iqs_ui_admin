import React from 'react';

import Logo from '../logo/Logo';
import ExternalLink from '../../helpers/ExternalLink';

export default function BrandsCard() {

    return (
        <div className="brands-card">

            <div className="main-brand">
                <ExternalLink 
                    endpoint={"https://www.coderKai.com/"} 
                    anchorText={"CoderKai"} 
                />                 
            </div>

            <div className="mini-logos">
               
                <div className="mini-logo iqs-logo">
                    <Logo />                    
                    <ExternalLink 
                        endpoint={"/home"} 
                        anchorText={"iQ"} 
                    />                 
                </div>  

                <div className="mini-logo algo-logo">
                    <div className="unicode-logo">&#x20BF;</div>
                    <ExternalLink 
                        endpoint={"https://www.algocash.com/"} 
                        anchorText={"AlgoCash"} 
                    />                 
                </div>      
            </div>         
            
        </div>
    )
}