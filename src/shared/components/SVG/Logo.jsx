import React from './node_modules/react';

export default function Logo() {

    return (        

        <svg 
            width="240"
            height="240"           
            viewBox="0 0 240 240"             
        >
            <g transform="matrix(0.5 0 0 0.5 0 0)">
                <path id="part-one" d="m585 630-270-540-270 540 45 90 225-450 180 360h90z" fill="#B3EFFF"  />
                <path id="part-two" d="m630 720 45-90h-450l135-270-45-90-225 450h540z" fill="#046B99" />
                <path id="part-three" d="m225 630h450l-270-540h-90l225 450h-270l-45 90z" fill="#1C304A" />
            </g>  
        </svg >     
	)
}