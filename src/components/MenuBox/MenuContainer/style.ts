import styled from "styled-components";

export const StyleMenuContainer = styled.div`
  width: 200px;
  height: 180px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  position: absolute;
  top: 52px;
  right: 0;
  z-index: 20;

  font-size: 18px;
  font-weight: 700;
  color: var(--grey-4);

  padding: 10px;
  gap: 4px;

  background-color: var(--color-primary-3);
  border: 2px solid var(--grey-4);
  animation: slide-in-top 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

  div {
    width: 60px;
    height: 60px;
    background-color: none;
    border-radius: 50%;
    border: 2px solid var(--grey-4);
  }

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;

    object-fit: cover;
  }

  a {
    cursor: pointer;
  }

  hr {
    width: 100%;
  }

  button {
    position: absolute;
    bottom: -3px;
    left: 7px;

    font-size: 40px;
    color: var(--grey-4);
  }

  @keyframes slide-in-top {
    0% {
      transform: translateY(-1000px);
      opacity: 0;
    }
    50% {
      opacity: 0;
    }
    70% {
      opacity: 0.5;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;
