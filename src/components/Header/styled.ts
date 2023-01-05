import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100vw;
  height: 100px;
  display: flex;
  align-items: center;
  background-color: var(--color-primary);

  @media (min-width: 768px) {
    border-radius: 0 0 0 70px;
  }

  nav {
    display: flex;
    height: 100%;
    max-width: 100%;
    justify-content: space-between;
    align-items: center;
  }

  img {
    width: 120px;
    height: 74px;
  }

  .boxMenu {
    display: flex;
    width: 80px;
    height: 50px;
    font-size: 20px;
    color: white;
    align-items: center;
    gap: 10px;

    div {
      display: flex;
      align-items: center;
      justify-content: center;

      width: 44px;
      height: 44px;

      font-size: 30px;
      border-radius: var(--radius-2);
      background-color: var(--grey-2);
    }

    button {
      font-size: 25px;
      color: var(--white);
    }
  }
`;

export const FilterBar = styled.div`
  position: absolute;
  width: 95%;
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
