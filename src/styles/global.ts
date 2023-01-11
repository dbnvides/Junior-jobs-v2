import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`

*{  
    margin: 0;      
    padding: 0;        
    box-sizing: border-box;       
}    

button{  
    cursor: pointer;        
    border: none;        
    background: transparent;    
} 

a{  color: unset;        
    text-decoration: none; 
} 

ul, ol, li{        
    list-style: none;    
}

h1, h2, h3, h4, h5, h6, p, a, span, li, button, input, label{        
    font-family: 'Kumbh Sans', sans-serif;
    outline: none;
}  

textarea:focus, input:focus, select:focus {   
    box-shadow: 0 0 0 0;   
    border: 0 none;   
    outline: 0;    
}

body{
    background: var(--white);
    color:var(--grey-4) ;
}

:root{
    --white: ${(props) => props.theme.colors.white};
    --color-primary: ${(props) => props.theme.colors.primary};
    --color-primary-2: ${(props) => props.theme.colors.primary2};
    --color-secondary: ${(props) => props.theme.colors.secondary};
    --color-secondary-2: ${(props) => props.theme.colors.secondary2};
    --grey-1: ${(props) => props.theme.colors.grey1};
    --grey-2: ${(props) => props.theme.colors.grey2};
    --grey-3:${(props) => props.theme.colors.grey3};
    --grey-4: ${(props) => props.theme.colors.grey4};
    --negative:${(props) => props.theme.colors.negative};
    --warning: ${(props) => props.theme.colors.warning};
    --sucess: ${(props) => props.theme.colors.sucess};
    --information: ${(props) => props.theme.colors.information};
 
    --title-1: 34px;
    --title-2: 28px;
    --title-3: 24px;
    --title-4: 18px;
    --title-5: 14px;
    --text: 16px;

    --regular: 400;
    --semi-bold: 600;
    --bold: 700;

    --radius-1: 4px;
    --radius-2: 8px;
}

`;
