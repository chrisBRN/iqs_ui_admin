import React, { useState } from 'react';

// export function UsernameInput(){

//     return (
//         <div className="username-input">
//             <input                
//                 required
//                 minLength={5}
//                 maxLength={30}
//                 pattern="[A-Za-z0-9_]+"
//                 type="text"                   
//                 placeholder={"username"}                                       
//                 >
//             </input>

//             <label>                    
//                 {"username"}
//             </label>

//             <div className="invalid-message">
//                 {"invalid"}
//             </div>
//             <div className="valid-message">
//                 {"valid"}
//             </div>
//         </div>
//     )
// }

export function PasswordInput(){
    return (
        <div className="password-input">
            <input                
                required
                minLength={5}
                maxLength={30}
                pattern="(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\S+$).+"
                type="password"                   
                placeholder={"password"}                                       
                >
            </input>

            <label>                    
                {"password"}
            </label>

            <div className="invalid-message">
                {"invalid"}    
            </div>

            <div className="valid-message">
                {"valid"}
            </div>           

        </div>
    )
    
}