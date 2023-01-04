import styled from "styled-components";

export const Footer = styled.footer`
    width: 100vw;
    height: 8.375rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--color-primary);
    border-radius: 0 7rem 0 0;

    position: static;
    left: 0;
    bottom: 0;

    .footerContainer {
        display: flex;
        flex-direction: column;
        gap: 0.25rem;
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
        font-size: var(--title-3);
        font-weight: var(--regular);
        font-family: var();
        line-height: 1.3;
        color: var(--white);
        margin: 0 auto;
    }
`;
