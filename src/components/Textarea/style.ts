import styled from "styled-components";

export const StyleTextArea = styled.fieldset`
    && {
        width: 100%;
        border: none;
        display: flex;
        flex-direction: column;
        gap: 18px;
    }
    && label {
        font-size: 20px;
        font-weight: var(--bold);
        color: var(--color-primary);
    }

    && textarea {
        width: 100%;
        height: 100px;
        background-color: #e9e8e8;
        border-radius: var(--radius-1);
        border: none;

        color: #9daec2;

        padding: 10px;
    }
`;
