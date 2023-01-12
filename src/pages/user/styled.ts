import styled from "styled-components";

export const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  gap: 20px;
  min-height: 100vh;

  .sectionProfile {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--white);
    position: relative;
    margin-top: 30px;
    padding: 25px 0 15px 0;
    border-radius: var(--radius-1);
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

    @media (min-width: 769px) {
      width: 95%;
      max-width: 730px;
      flex-direction: row;
      gap: 20px;
      align-self: center;
      align-items: center;
      height: 140px;
      padding: 0;
    }

    .avatarProfile {
      width: 50px;
      height: 50px;
      position: absolute;
      top: -25px;
      border-radius: 4px;
      overflow: hidden;
    }

    .avatarProfile img {
      width: 50px;
      height: 50px;
      object-position: center;
      object-fit: cover;
      position: relative;
    }

    @media (min-width: 769px) {
      .avatarProfile {
        width: 140px;
        height: 140px;
        position: relative;
        border-radius: 4px 0 0 4px;
        overflow: hidden;
        top: 0;
      }

      .avatarProfile img {
        width: 100%;
        height: 100%;
        object-position: center;
        object-fit: cover;
      }
    }

    .avatarDefault {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 50px;
      height: 50px;
      font-size: 30px;
      color: var(--white);
      position: absolute;
      top: -25px;
      border-radius: var(--radius-2);
      background-color: var(--grey-3);

      @media (min-width: 769px) {
        position: relative;
        width: 140px;
        height: 140px;
        top: 0;
        font-size: 50px;
        border-radius: 4px 0 0 4px;
      }
    }

    .contentProfile {
      display: flex;
      flex-direction: column;
      text-align: center;
      gap: 3px;
      color: var(--grey-3);
      h2 {
        color: var(--grey-4);
      }
      span {
        margin: 10px 0;
      }

      @media (min-width: 769px) {
        text-align: start;
      }
    }

    button {
      padding: 10px 20px;
      background-color: var(--grey-2);
      border-radius: var(--radius-1);
      font-weight: var(--semi-bold);

      @media (min-width: 769px) {
        position: absolute;
        right: 30px;
      }
    }
  }

  .sectionJob {
    h2 {
      font-size: var(--title-1);
      margin-bottom: 20px;
    }
    ul {
      width: 100%;
      height: 300px;
      display: flex;
      padding: 0 10px;
      flex-direction: row;
      gap: 20px;
      overflow: auto;
      margin-bottom: 20px;

      @media (min-width: 769px) {
        flex-direction: column;
        height: 800px;
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

      &:hover {
        border: 2px solid var(--color-primary);
        cursor: pointer;
      }
    }

    @media (min-width: 769px) {
    }
  }
`;
