import React, { useState, useRef } from 'react';
import styled from 'styled-components';


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
  
    .description {             
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

    .revealed {
        transition: opacity 0.5s ease, max-height 1s ease, max-width 1s ease, transform 1s ease;
        opacity: 1;       
        max-height: 1000px;   
        max-width: 1000px;   
    }

    .hidden {
        transition: opacity 0.25s ease, max-height 0.2s ease, max-width 0.2s ease;
        opacity: 0; 
        overflow: hidden;        
        max-height: 0rem;   
        max-width: 0rem;
    }
    
`;

interface Props {
    description: string,
    content: Function
}

export default function Test() {    

    const [sizeToggle, setSizeToggle] = useState<boolean>(false);    

    return (
        <StyledContainer>            

                <div className="expander" onClick={() => setSizeToggle(!sizeToggle)}></div>
                <h3 className="description">EXPAND ME</h3>  

                <div className={sizeToggle ? "revealed" : "hidden"}>
                    YAYAYAYAYAYAYAYA <br></br>
                    YAYAYAYAYAYAYAYA <br></br>
                    YAYAYAYAYAYAYAYA <br></br>
                    YAYAYAYAYAYAYAYA <br></br>                    
                </div>
            
        </StyledContainer>

        
    )
}