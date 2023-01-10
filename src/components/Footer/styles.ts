import styled from "styled-components";

export const Footer = styled.footer`
    width: 100vw;
    height: 6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--color-primary);
    border-radius: 0 7rem 0 0;
    padding: 15px 0;

    position: static;
    left: 0;
    bottom: 0;
    @media (min-width: 769px) {
        height: 4rem;
    }

    .footerContainer {
        display: flex;
        flex-direction: column;
        gap: 0.25rem;
        @media (min-width: 769px) {
            width: 80%;
            max-width: 700px;

            flex-direction: row-reverse;
            justify-content: space-between;
        }
    }

    .socialMediaIcons {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
    }

    .logoContainerFooter span {
        width: 100%;
        margin: 0 auto;
    }

    .logoContainerFooter span {
        font-size: var(--title-4);
        font-weight: var(--regular);
        font-family: "Montserrat", sans-serif;
        line-height: 1.3;
        color: var(--white);
        margin: 0 auto;
    }
`;
