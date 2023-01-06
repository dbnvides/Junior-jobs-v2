import styled from "styled-components";

export const StyledForm = styled.form`
  width: 300px;
  max-width: 100%;
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 769px) {
    width: 539px;
  }

  button {
    width: 100%;
    padding: 10px;
    margin-top: 15px;

    background-color: var(--color-primary);
    color: var(--white);

    border-radius: var(--radius-1);
  }
`;
