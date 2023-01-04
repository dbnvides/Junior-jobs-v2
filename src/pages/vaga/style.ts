import styled from "styled-components";

export const StyledMain = styled.main`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

padding: 16px;
gap: 16px;

background-color: var(--grey-1);

p{
    color: #6E8098;
}

h1 , h2 , h3 , h4 , h5 {
    color: #19202D;
}

.card{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 230px;

    gap: 16px;

    background-color: var(--white);

    border: 1px solid transparent;
    border-radius: var(--radius-2);

    position: relative;

    div{
        width: 50px;
        height: 50px;

        background-color: orange;
        border-radius: var(--radius-2);

        position: absolute;
        top: -25px;
    }
}

.description{
    display: flex;
    flex-direction: column;
    justify-content: center;

    width: 100%;
    height: max-content;

    gap: 16px;
    padding: 16px;

    background-color: var(--white);
}

`;
