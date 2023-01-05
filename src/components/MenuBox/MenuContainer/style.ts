import styled from "styled-components";

export const StyleMenuContainer = styled.div`
  width: 300px;
  height: 120px;

  position: absolute;
  top: 52px;
  right: 0;

  background-color: white;
  border: 2px solid var(--color-primary);
  animation: slide-in-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

  @keyframes slide-in-top {
    0% {
      transform: translateY(-1000px);
      opacity: 0;
    }

    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;
