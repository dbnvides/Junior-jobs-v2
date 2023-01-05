import styled from "styled-components";

export const StyledModalAddJob = styled.div`
    width: 539px;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .modalAddJobContainer {
        display: flex;
        flex-direction: column;

        form {
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }

        button {
            width: 100%;
            height: 48px;
            background-color: var(--color-primary);
            color: var(--white);
            border-radius: var(--radius-1);
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
