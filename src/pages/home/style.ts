import styled from "styled-components";

export const StyledHome = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: var(--grey-1);

  > * {
    :nth-child(2) {
      display: flex;
      flex-direction: column;
    }
  }
`;

export const StyledJobsList = styled.ul`
  width: 100%;
  display: grid;
  justify-content: space-between;
  grid-template-columns: 30% 30% 30%;
  flex-wrap: wrap;
  flex-direction: row;

  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

export const StyledViewMoreContainer = styled.div`
  width: 100%;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 15%;
    height: 60px;
    border-radius: var(--radius-1);
    background-color: var(--color-primary);
    color: var(--white);

    @media only screen and (max-width: 1300px) {
      width: 95%;
    }
  }
`;

export const StyledJob = styled.li`
  position: relative;
  border-radius: var(--radius-2);
  width: 100%;
  padding: 45px 25px;
  display: flex;
  flex-direction: column;
  gap: 26px;
  background-color: var(--white);
  margin-top: 20%;

  div {
    img {
      width: 80px;
      height: 80px;
      top: -20%;
      background-color: red;
      position: absolute;
      border-radius: 28px;
    }
    display: flex;
    flex-direction: column;
    gap: 8px;

    h2 {
      color: var(--grey-4);
    }
    p {
      color: var(--grey-3);
    }
  }

  h4 {
    color: var(--grey-4);
  }
`;

export const FilterBar = styled.div`
  margin: 25px 0;
  width: 100%;
  max-width: 1000px;
  height: 10vh;
  background-color: var(--white);
  border-radius: var(--radius-2);
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: 1040px) {
    .filterTitle {
      width: 70% !important;
      img {
        display: none;
      }
    }

    .filterLocal {
      display: none;
    }

    .searchContainer {
      width: 30% !important;
      div {
        display: none !important;
      }
      img {
        display: flex !important;
      }
      .mobileSearch {
        display: flex !important;
        justify-content: center;
        align-items: center;
        height: 0;
        width: 0;
        padding: 28px;
      }
      button {
        display: none;
      }
    }
  }

  @media only screen and (max-width: 450px) {
    .filterTitle {
      width: 55% !important;
    }
    .searchContainer {
      width: 45% !important;
    }
  }

  div {
    padding: 0 15px;
    height: 100%;
    display: flex;
    align-items: center;

    img {
      width: 30px;
      height: 30px;
    }

    input {
      width: 100%;
      background-color: transparent;
      border: none;
      outline: none;
      font-size: 18px;
    }
  }

  .filterTitle {
    width: 35%;
    gap: 15px;
    border-right: 1px solid var(--grey-1);
  }

  .filterLocal {
    width: 30%;
    gap: 15px;
    border-right: 1px solid var(--grey-1);
  }

  .searchContainer {
    width: 35%;
    justify-content: space-between;

    div {
      display: flex;
      justify-content: space-between;

      label {
        display: flex;
        align-items: center;
        gap: 10px;
        font-weight: var(--bold);

        input {
          width: 21px;
          height: 21px;
          cursor: pointer;
        }
      }
    }

    img {
      display: none;
    }

    .mobileSearch {
      display: none;
    }

    button {
      background-color: var(--color-primary);
      color: var(--white);
      border-radius: var(--radius-2);
      height: 55%;
      font-size: 18px;
      padding: 0 30px;
    }
  }
`;
