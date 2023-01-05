import styled from "styled-components";

export const CompanyPageContainer = styled.div`
  width: 95%;
  margin: 0 auto;
  height: 100vh;

  .boxTitle {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 35px;
    margin-bottom: 50px;

    h1 {
      font-size: var(--title-1);
    }

    > button {
      background-color: var(--color-primary);
      color: var(--white);
      padding: 15px;
      border-radius: 5px;
      font-size: var(--text);
    }

    > button:hover {
      background-color: var(--color-primary-2);
    }
  }

  @media (min-width: 769px) {
    .boxTitle {
      max-width: 1000px;
      margin: 0 auto;
      margin-top: 35px;
      margin-bottom: 50px;
    }
  }
`;
