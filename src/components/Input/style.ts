import styled from "styled-components";

export const StyleField = styled.fieldset`
  position: relative;

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
    color: var(--grey-5);
  }

  && input {
    width: 100%;
    height: 50px;
    font-size: var(--title-5);
    background-color: #e9e8e8;
    border-radius: var(--radius-1);
    border: 1px solid black;

    color: var(--color-primary);

    padding-left: 10px;
  }
  && i {
    position: absolute;
    bottom: 12px;
    right: 15px;
  }
`;
