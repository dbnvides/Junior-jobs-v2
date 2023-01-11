import styled from "styled-components";

export const StyledModalEditJob = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    position: fixed;
    left: 0;
    top: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;

    .modalEditJobContainer {
        width: 90%;
        max-width: 539px;
        display: flex;
        flex-direction: column;
        max-height: 400px;
        overflow-y: scroll;
        background-color: var(--grey-1);
        padding: 2rem;
        border-radius: var(--radius-2);
        position: relative;
        scrollbar-width: 0;
        @media (min-width: 769px) {
            max-height: 600px;
        }

        ::-webkit-scrollbar {
            width: 0;
        }

        .modalEditJobTitle {
            margin-bottom: 2rem;
        }

        .closeModalEditJobButton {
            font-size: var(--title-3);
            font-weight: var(--semi-bold);
            line-height: 1.3;
            color: var(--color-primary);

            position: absolute;
            right: 2rem;
            top: 2rem;
            background-color: transparent;
        }

        form {
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }

        .labelEditJobModal {
            font-size: 20px;
            font-weight: var(--bold);
            color: var(--color-primary);
        }

        .selectEditJobModal {
            width: 100%;
            height: 50px;
            background-color: #e9e8e8;
            border-radius: var(--radius-1);
            border: 1px solid black;

            color: var(--color-primary);

            padding-left: 10px;
        }

        .editJobButton {
            width: 100%;
            height: 48px;
            background-color: var(--color-primary);
            color: var(--white);
            border-radius: var(--radius-1);
            margin-bottom: 2rem;
            transition: 0.2s ease;

            :hover {
                opacity: 0.75;
            }
        }

        .errorMessage {
            font-size: var(--title-5);
            font-weight: var(--regular);
            line-height: 0.1;
            color: var(--negative);
        }
    }
`;
