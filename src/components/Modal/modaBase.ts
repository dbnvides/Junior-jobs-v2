import styled from "styled-components";

export const StyleModalBase = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 1000;

  width: 100%;
  height: 100vh;

  background-color: rgba(0, 0, 0, 0.5);

  .modalClose {
    font-size: 25px;
    color: var(--grey-5);
    position: absolute;
    right: 10px;
    top: 0;
  }

  .container {
    max-width: 600px;
    background-color: var(--color-primary-3);
    border-radius: var(--radius-1);
    padding: 10px;
    backdrop-filter: blur(2px);
  }

  .modalHeader {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    width: 100%;
  }
`;
