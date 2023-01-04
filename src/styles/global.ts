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

:root{
    --white: rgb(255, 255, 255);
    --color-primary: rgb(31, 23, 23);
    --color-primary-2: rgba(31, 23, 23, 0.75);
    --color-secondary: rgba(255, 0, 0, 0.9);
    --color-secondary-2: rgba(255, 0, 0, 0.6);
    --grey-1: rgb(244, 246, 248);
    --grey-2: rgb(201, 201, 201);
    --negative: rgb(230, 0, 0);
    --warning: rgb(255, 205, 7);
    --sucess: rgb(22, 136, 33);
    --information: rgb(21, 91, 203);
 
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

`