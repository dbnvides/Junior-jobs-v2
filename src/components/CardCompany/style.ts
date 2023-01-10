import styled from "styled-components";

export const StyledCardCompanyContainer = styled.li`
  height: 250px;
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
    width: 50px;
    height: 50px;
    border-radius: 10px;
  }

  .avatarDefault {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    margin-top: -20px;
    width: 50px;
    height: 50px;
    border-radius: 10px;
    font-size: 30px;
    color: var(--white);
    border-radius: var(--radius-2);
    background-color: var(--grey-3);
  }

  .description {
    display: none;
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 40px;
  }

  .outWork {
    position: absolute;
    left: 20px;
    bottom: 20px;
    width: 30px;
    height: 30px;
    border-radius: var(--radius-1);
    font-size: 20px;
    background-color: var(--color-secondary-2);
    color: var(--white);
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      background-color: var(--color-secondary);
    }
  }

  @media (min-width: 769px) {
    width: 95%;
    max-width: 1000px;
    height: 230px;
    padding: 50px 20px 20px 20px;

    .description {
      display: flex;
      width: 70%;
    }

    > div {
      display: flex;
      flex-direction: row;
    }

    .boxButtons {
      flex-direction: column;
    }

    .outWork {
      position: absolute;
      left: auto;
      right: 30px;
      bottom: auto;
      top: 50px;
      width: 40px;
      height: 40px;
      border-radius: var(--radius-1);
      font-size: 25px;
      background-color: var(--color-secondary-2);
      color: var(--white);
      display: flex;
      align-items: center;
      justify-content: center;

      &:hover {
        background-color: var(--color-secondary);
      }
    }
  }
`;

export const StyledInfCompany = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  .smallDetail {
    width: max-content;
    display: flex;
    gap: 10px;
    color: var(--grey-3);

    p {
      padding: 0 2px;
      background-color: var(--grey-1);
    }
  }

  .nameCompany {
    color: var(--grey-3);
  }
  .titleJob {
    color: var(--grey-0);
  }

  .locality {
    margin-top: 10px;
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
    width: 40%;
    .smallDetail {
      gap: 10px;
      color: var(--grey-3);
      font-size: var(--title-5);
    }
  }
`;
