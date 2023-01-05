import styled from "styled-components";

export const StyleModalBase = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 10;

  width: 100%;
  height: 100vh;

  background-color: rgba(0, 0, 0, 0.2);

  .container {
    background-color: white;

    padding: 10px;
  }

  .modalHeader {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
  }
`;
