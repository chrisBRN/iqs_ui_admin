import styled from 'styled-components';

export const StyledCard = styled.div` 

    background-color: rgba(255, 255, 255, 0.6); 

    box-sizing: border-box;    
    padding: 2em;

    border: 1px solid #e1e1e5;
    border-radius: 4px;         
    box-shadow: 1px 1px 4px 0 rgba(0,0,0,0.05);  
    
    transition: box-shadow 0.1s, background-color 0.1s;  

    &:hover {
        background-color: rgba(255, 255, 255, 1);   
        box-shadow: 2px 2px 6px 0 rgba(0,0,0,0.1);  
    }        
`;

export const StyledUL = styled.ul`
    list-style-type: none;
`;

export const StyledLI = styled.li`
    display: inline-block;
    list-style-type: none;
    padding: 1em;

    &:hover {
        cursor: pointer;       
        font-weight: bold;
    }         
`;