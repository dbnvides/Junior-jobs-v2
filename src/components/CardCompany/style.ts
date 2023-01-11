import styled from "styled-components";

export const StyledCardCompanyContainer = styled.li`
  height: 260px;
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
    object-fit: contain;
    background-color: var(--white);
    border: 2px solid var(--grey-3);
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

  .boxButtons {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
    button {
      font-size: 25px;
    }
  }

  .outWork {
    position: absolute;
    right: 30px;
    bottom: 40px;
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
    height: 200px;
    padding: 50px 20px 20px 20px;

    .description {
      display: flex;
      width: 70%;
      overflow: hidden;
    }
    .description p {
      text-overflow: ellipsis;
      display: -webkit-box;
      line-height: normal;
      -webkit-line-clamp: 5;
      -webkit-box-orient: vertical;
    }

    > div {
      display: flex;
      flex-direction: row;
    }

    .boxButtons {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      gap: 5px;
      button {
        font-size: 25px;
      }
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
    overflow: hidden;
    font-size: var(--title-3);
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }

  .locality {
    margin-top: 10px;
  }

  .boxButtons {
    display: flex;
    gap: 10px;
    background-color: aqua;

    > button {
      width: 50px;
      height: 50px;
      background-color: var(--grey-1);
      border-radius: 5px;
      cursor: pointer;
    }
  }

  @media (min-width: 769px) {
    width: 30%;

    .smallDetail {
      gap: 10px;
      color: var(--grey-3);
      font-size: var(--title-5);
    }
  }
`;
