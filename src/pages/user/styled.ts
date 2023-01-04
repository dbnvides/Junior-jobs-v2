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

    .avatarProfile {
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
    }

    button {
      padding: 10px 20px;
      background-color: var(--grey-2);
      border-radius: var(--radius-1);
      font-weight: var(--semi-bold);
    }
  }

  .sectionJob {
    h2 {
      font-size: var(--title-1);
      margin-bottom: 20px;
    }
    min-height: 53vh;
  }
`;
