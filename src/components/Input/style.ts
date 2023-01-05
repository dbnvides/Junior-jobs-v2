import styled from "styled-components";

export const StyleField = styled.fieldset`

   && {
      width:100%;
      border:none;
      display:flex;
      flex-direction:column;
      gap:18px;
   }
   && label{
      font-size:20px;
      font-weight:var(--bold);
      color:var(--color-primary);
   }
   
   && input{
      width:100%;
      height:50px;
      background-color:#e9e8e8;
      border-radius:var(--radius-1);
      border:none;

     color:#9DAEC2;

     padding-left:10px;
   }
`