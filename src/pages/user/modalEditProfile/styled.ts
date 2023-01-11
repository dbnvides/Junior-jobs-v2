import styled from "styled-components";

export const StyledModalEditProfile = styled.div`
  width: 350px;
  max-width: 100%;
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 769px) {
    width: 539px;
  }

  .modalEditProfileContainer {
    width: 90%;
    display: flex;
    flex-direction: column;
    max-height: 400px;
    overflow-y: scroll;
    scrollbar-width: 0;
    @media (min-width: 769px) {
      max-height: 600px;
    }

    ::-webkit-scrollbar {
      width: 0;
    }

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
