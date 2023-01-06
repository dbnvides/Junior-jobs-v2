import styled from "styled-components";

export const StyledForm = styled.form`
  min-width: 280px;
  max-width: 500px;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  button {
    width: 100%;
    padding: 10px;
    margin-top: 15px;

    background-color: var(--color-primary);
    color: var(--white);

    border-radius: var(--radius-1);
  }
`;
