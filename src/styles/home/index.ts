import styled from "styled-components";

export const StyledHome = styled.div`
  width: 100%;
  height: 100vh;
`;

export const StyledVacancyList = styled.ul`
  width: 100%;
  height: 85vh;
  display: flex;
  flex-direction: column;
  gap: 64px;
`;

export const StyledViewMoreContainer = styled.div`
  width: 100%;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40%;
    height: 40px;
    border-radius: var(--radius-1);
    background-color: var(--color-primary);
    color: var(--white);
  }
`;

export const StyledVacancy = styled.li`
  position: relative;
  border-radius: var(--radius-2);
  width: 100%;
  padding: 45px 25px;
  display: flex;
  flex-direction: column;
  gap: 26px;

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
      color: var(--color-primary);
    }
    p {
      color: var(--grey-2);
    }
  }
`;
