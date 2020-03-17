import styled from 'styled-components';

export const defaultTheme = {

    colors: {
        white: "#ffffff",
        offWhite: "#f6f8fa",
        offBlack: "#090705",        

        border: "#e1e1e5",
        
        blue: "#00B0FF",
        green: "#00BFA6",
        red: "#F50057",

        autoFillBlue: "rgba(232, 240, 254, 0.5)"
    },

    fonts: {
        main: "'Muli', 'sans-serif'",
        big: "'Neuton', 'serif'"
    },

    cheapAnimations: {
        
        bounce: `
            transition: transform 0.2s ease; 
            &:hover { 
                transform: translate(0px, -4px);
            }`,
            
        opacityPop: `
            opacity: 0.9; 
            transition: opacity 0.1s ease; 
            &:hover { 
                opacity: 1;
            }`,
            
        boxShadowPop: `
            transition: box-shadow 0.2s ease; 
            &:hover { 
                box-shadow: 2px 2px 6px 0 rgba(0,0,0,0.1);
            }`                    
    } 
};   

export const StyledFullPage = styled.div`

    height: 100vh;
    width: 100vw;    
    margin: 0;
    padding: 0; 
`;

export const StyledFullPageContentWrapper = styled.div`

    height: 100vh;
    width: 100vw;   
    margin: 0;
    padding: 0;
    
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;  

    position: relative;
`;

interface CardProps {
    width: any;
    height: any;
}

export const StyledCard = styled.div<CardProps>`

    background-color: ${props => props.theme.colors.white};

    box-sizing: border-box;    
    padding: 2em;
    margin: auto;

    width: ${p => p.width};
    height: ${p => p.height};

    position: relative;   
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;   

    border: 1px solid ${props => props.theme.colors.border};
    border-radius: 4px;         
    box-shadow: 1px 1px 4px 0 rgba(0,0,0,0.05);  

    ${props => props.theme.cheapAnimations.boxShadowPop};
`;

export const StyledHR = styled.hr`
    border: 0;
    clear:both;
    display:block;
    width: 90%;               
    background-image: linear-gradient(to right, rgba(9, 7, 5, 0), rgba(9, 7, 5, 0.25), rgba(9, 7, 5, 0));
    height: 1px;
    margin: 1em;
`;

