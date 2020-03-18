import styled from 'styled-components';

export const defaultTheme = {

    colors: {
        white: "#ffffff",
        offWhite: "#f6f8fa",
        offBlack: "#090705",

        border: "#e1e1e5",
        borderLight: "#F4F4F5",

        blue: "#00B0FF",
        green: "#00BFA6",
        offGreen: "#daedeb",

        red: "#F50057",

        autoFillBlue: "rgba(232, 240, 254, 0.5)",
        boxFill: "#FAFBFC"
    },

    fonts: {
        main: "'Muli', 'sans-serif'",
        big: "'Neuton', 'serif'"
    },

    cheapAnimations: {

        bounce: `
            transition: transform 0.2s ease; 
            &:hover { 
                transform: translate(0px, -8px);
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

    mixins: {

        scrollBar: `

            overflow-x: hidden; 
            overflow-x: auto; 

            ::-webkit-scrollbar {           
                width: 3em;   
            } 

            ::-webkit-scrollbar-thumb {            
                background-clip: padding-box;
                border: 0em solid rgba(0, 0, 0, 0);
                border-right-width: 2em;
                border-left-width: 2em;
                
                background-color: rgba(0, 0, 0, 0.15);          
            }                

            ::-webkit-scrollbar-track {              
                margin: 1em; 
            }
        `
    }

};

export const StyledFullPage = styled.div`
    height: 100vh;
    width: 100vw;    
    margin: 0;
    padding: 0; 
`;

export const StyledFullPageContentWrapper = styled.div`

    height: 98%;
    width: 98%;   
    margin: 0;
    padding: 0;
    
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;  

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

    position: relative;   
    display: flex;
    flex-direction: column;       
    align-items: center;   
    justify-content: center;

    border: 1px solid ${props => props.theme.colors.borderLight};
    border-radius: 4px;         
    box-shadow: 1px 1px 4px 0 rgba(0,0,0,0.01);    
    
    ${props => props.shadowPop ? props.theme.cheapAnimations.boxShadowPop : null};     
    ${props => props.bounce ? props.theme.cheapAnimations.bounce : null};  

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

