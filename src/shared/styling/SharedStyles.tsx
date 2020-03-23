import styled from 'styled-components';

export const defaultTheme = {

    colors: {
        white: "white",
        offWhite: "whitesmoke",
        offBlack: "darkslategray",

        border: "gainsboro", 
        autoFillBlue: "rgba(232, 240, 254, 0.5)",
        boxFill: "#eee",

        blue: "steelblue",
        blueLight: "paleturquoise",
        green: "olive",
        red: "indianRed",        
    },

    fonts: {
        main: "'Roboto', 'sans-serif'",
        big: "'Neuton', 'serif'",
        headline: "'Roboto', sans-serif;"        
    },  

    mixins: {

        scrollBar: `

            overflow-x: hidden; 
            overflow-x: auto; 

            ::-webkit-scrollbar {           
                width: 2em;                              
            } 

            ::-webkit-scrollbar-thumb {            
                background-clip: padding-box;
                border: 0em solid rgba(0, 0, 0, 0);
                border-right-width: 1em;
                border-left-width: -1em;
                
                background-color: rgba(120, 120, 120, 0.5);          
            }                

            ::-webkit-scrollbar-track {   
                margin: 1em; 
            }
        `,

        animations: {

            bounce: `
                transition: transform 0.2s ease-in-out; 
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
                    box-shadow: 2px 2px 4px 0 rgba(0,0,0,0.05);
                }`
        },
    }
};

export const StyledFullPage = styled.div`
    height: 100vh;
    width: 100vw;    
    margin: 0;
    padding: 0; 
    position: relative;
`;

export const StyledFullPageContentWrapper = styled.div`
    height: 100vh;
    width: 100vw;   
    margin: 0;
    padding: 0;   
    position: relative;
`;

interface CardProps {
    width?: string;
    height?: string;

    margin?: string;
    padding?: string;

    shadowPop?: any;
    bounce?: any;
}

export const StyledCard = styled.div<CardProps>`

    background-color: ${props => props.theme.colors.white};

    box-sizing: border-box;        

    width: ${props => props.width};
    height: ${props => props.height};
    
    padding: 2em;
    position: relative;       

    border: 1px solid ${props => props.theme.colors.border};           
    box-shadow: 1px 1px 4px 0 rgba(0,0,0,0.01);    
    
    ${props => props.shadowPop ? props.theme.mixins.animations.boxShadowPop : null};     
    ${props => props.bounce ? props.theme.mixins.animations.bounce : null};  

`;

export const StyledHR = styled.hr`
    border: 0;
    clear: both;
    display:block;
    width: 80%;          
    background-color: rgba(9, 7, 5, 0.1);         
    height: 1px;    
    margin: 2em;
`;

