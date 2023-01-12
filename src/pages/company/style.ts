import styled from "styled-components";

export const CompanyPageContainer = styled.div`
  width: 95%;
  margin: 0 auto;
  height: 110vh;

  ul {
    height: 600px;
    overflow: auto;
    padding: 20px 0;
    overflow-x: hidden;
    ::-webkit-scrollbar {
      width: 5px;
      background-color: var(--grey-1);
      border-radius: 4px;
    }

    ::-webkit-scrollbar-thumb {
      background-color: var(--color-primary);
      border-radius: 2px;
    }
  }

  .noWork {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: var(--title-3);
    font-weight: var(--semi-bold);
    padding: 20px;
    border-radius: var(--radius-2);
    background-color: var(--grey-2);
    width: 100%;
    height: 100px;
  }

  .perfil {
    height: 200px;
    background-color: var(--color-primary-3);
    width: 300px;
    margin: 0 auto;
    position: relative;
    margin-top: 30px;
    padding: 50px 20px 30px 20px;
    border-radius: 5px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

    .boxImg {
      width: 50px;
      height: 100%;
      position: absolute;
      margin-top: -75px;
      margin-left: 110px;

      > img {
        width: 50px;
        height: 50px;
        border-radius: 10px;
      }
    }

    .infPerfil {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 30px;

      h2 {
        font-size: var(--title-3);
      }

      p {
        font-size: var(--title-5);
        color: var(--grey-3);
      }

      button {
        background-color: var(--grey-2);
        color: var(--grey-primary);
        padding: 15px;
        border-radius: 5px;
        font-size: var(--text);
        font-weight: var(--bold);
        cursor: pointer;
      }

      button:hover {
        opacity: 0.8;
      }
    }
  }

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
      color: white;
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

    .perfil {
      max-width: 730px;
      height: 140px;
      width: 95%;
      display: flex;
      justify-content: space-between;
      padding: 0 30px 0 0;

      .boxImg {
        width: 20%;
        height: 100%;
        position: static;
        margin: 0px;

        img {
          width: 100%;
          height: 100%;
          border-radius: 0px;
        }
      }

      .infPerfil {
        width: 80%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        div {
          padding-left: 30px;
        }
      }
    }
  }
`;
