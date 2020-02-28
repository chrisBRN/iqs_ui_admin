import React from 'react';

interface InputFieldProps {
    type?: string
    label: string       
}

export default function InputField({type = "text", label} : InputFieldProps) {

    return (
        <div className="input-with-label-pop">    
            <div className="input-container">

                <input 
                    type={type} 
                    className="input-field" 
                    placeholder={label}>
                </input>     
                
                <label 
                    className="input-label">
                    {label}
                </label>  

            </div>                                                    
        </div>
    )
}