import styled from "styled-components";

export const StyleModalBase = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 10;

  width: 100%;
  height: 100vh;

  background-color: rgba(0, 0, 0, 0.5);

  .modalClose {
    font-size: 25px;
    position: absolute;
    right: 10px;
    top: 0;
  }

  .container {
    background-color: white;
    border-radius: var(--radius-1);
    padding: 10px;
  }

  .modalHeader {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    width: 100%;
  }
`;
