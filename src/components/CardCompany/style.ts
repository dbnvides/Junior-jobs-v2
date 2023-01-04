import styled from "styled-components";

export const CardCompanyContainer = styled.div`
  height: 300px;
  background-color: var(--white);
  width: 300px;
  margin: 0 auto;
  position: relative;
  margin-top: 30px;
  padding: 50px 20px 30px 20px;
  border-radius: 5px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

  > img {
    position: absolute;
    top: 0;
    margin-top: -20px;
  }

  .description {
    display: none;
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 40px;
  }

  .infCompany {
    display: flex;
    flex-direction: column;
    gap: 40px;
  }

  .boxButtons {
    display: flex;
    gap: 10px;

    > button {
      width: 50px;
      height: 50px;
      background-color: var(--grey-1);
      border-radius: 5px;
      cursor: pointer;
    }
  }

  @media (min-width: 769px) {
    width: 95%;
    max-width: 1000px;
    height: 250px;
    padding: 50px 30px 30px 30px;

    .description {
      display: flex;
      width: 60%;
    }

    > div {
      display: flex;
      flex-direction: row;
    }

    .infCompany {
      width: 40%;
    }

    .boxButtons {
      flex-direction: column;
    }
  }
`;
