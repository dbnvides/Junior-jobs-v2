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

export const StyledVacancyList = styled.ul`
  width: 100%;
  display: grid;
  justify-content: space-between;
  grid-template-columns: 30% 30% 30%;
  flex-wrap: wrap;
  flex-direction: row;
  margin-top: 100px;

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
