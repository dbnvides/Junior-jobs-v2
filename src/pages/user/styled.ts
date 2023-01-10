import styled from "styled-components";

export const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  gap: 20px;

  .sectionProfile {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--white);
    position: relative;
    top: -20px;
    padding: 25px 0 15px 0;
    border-radius: var(--radius-1);
    box-shadow: 0px 0px 14px 0px rgba(0, 0, 0, 0.75);

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
      border-radius: 4px 0 0 4px;
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
    min-height: 50vh;
  }
`;
