import styled from "styled-components";

export const ModalViewerContainer = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;

  .Modal {
    width: 95%;
    height: 800px;
    background-color: var(--white);
    overflow: auto;
    border-radius: 5px;

    .ModalHeader {
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      padding: 30px 20px 0 10px;

      h1 {
        font-size: var(--title-3);
      }

      button {
        font-weight: var(--bold);
        font-size: var(--title-4);
        cursor: pointer;
      }

      > div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
      }
    }

    .bar {
      height: 1px;
      width: 100%;
      background-color: var(--grey-2);
    }

    .user {
      background-color: var(--white);
      width: 95%;
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

      .description {
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
    }

    @media (min-width: 769px) {
      .ModalHeader {
        max-width: 1000px;
        margin: 0 auto;
      }
    }
  }
`;
