import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledHome = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: var(--white);

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
    background-color: var(--color-primary-3);
    color: var(--grey-4);

    @media only screen and (max-width: 1300px) {
      width: 95%;
    }
  }
`;

export const StyledJob = styled(motion.li)`
  position: relative;
  border-radius: var(--radius-2);
  width: 100%;
  padding: 45px 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 26px;
  background-color: var(--color-primary-3);
  margin-top: 30%;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  cursor: pointer;

  @media only screen and (max-width: 768px) {
    margin-top: 15%;
  }

  div {
    img {
      object-fit: contain;
      width: 80px;
      height: 80px;
      top: -15%;
      background-color: var(--grey-1);
      position: absolute;
      border-radius: var(--radius-2);
      border: 2px solid var(--grey-3);
    }
    display: flex;
    flex-direction: column;
    gap: 8px;

    h2 {
      height: 60px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      color: var(--grey-4);
    }
    .description {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 5;
      -webkit-box-orient: vertical;

      color: var(--grey-3);
    }
  }

  h4 {
    color: var(--grey-4);
  }
`;

export const FilterBar = styled(motion.div)`
  margin: 25px 0;
  width: 100%;
  max-width: 1000px;
  background-color: var(--white);
  border: 3px solid var(--color-primary-3);
  border-radius: var(--radius-2);
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 1040px) {
    .filterTitle {
      width: 70% !important;
    }

    .filterLocal {
      display: none !important;
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
      width: 70% !important;
    }
    .searchContainer {
      width: 30% !important;
    }
  }

  .mainFilter {
    width: 100%;
    height: 10vh;
    display: flex;
    justify-content: space-between;

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
  }

  .filterTitle {
    width: 35%;
    gap: 15px;
    border-right: 1px solid var(--grey-1);

    @media only screen and (max-width: 450px) {
      img {
        display: none;
      }
    }
  }

  .filterLocal {
    width: 30%;
    gap: 15px;
    border-right: 1px solid var(--grey-1);
  }

  .searchContainer {
    width: 35%;
    justify-content: center;
    align-items: center;

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

  .mobileFilter {
    display: flex;
    width: 100%;
    height: 10vh;
    border-radius: 0 0 var(--radius-2) var(--radius-2);
    border-top: 1px solid var(--grey-1);
    img {
      width: 30px;
      height: 30px;
    }
    div {
      padding: 0 15px;
      height: 100%;
      display: flex;
      align-items: center;
    }
    .mobileLocalContainer {
      width: 70%;
      gap: 15px;
      border-right: 1px solid var(--grey-1);

      input {
        width: 100%;
        background-color: transparent;
        border: none;
        outline: none;
        font-size: 18px;
      }

      @media only screen and (max-width: 450px) {
        img {
          display: none;
        }
      }
    }
    .mobileFulltimeContainer {
      width: 30%;
      justify-content: center;
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
  }
`;
