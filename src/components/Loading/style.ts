import styled from "styled-components";

export const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 2;
  background-color: rgb(0, 0, 0, 0.4);
  width: 100%;
  height: 100vh;

  .loader {
    width: 85px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    font-size: 13px;
    animation: loaderRotate 1.5s infinite;
  }
  @keyframes loaderRotate {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  .dot {
    width: 0.7em;
    height: 0.7em;
    border-radius: 50%;
    background-color: #470000;
    margin: 0.4rem;
    opacity: 0.6;
    font-size: 15px;
  }

  .dot:nth-child(1) {
    animation: animateLoader 1.5s infinite;
  }

  .dot:nth-child(2) {
    animation: animateLoader 1.3s infinite;
  }

  .dot:nth-child(3) {
    animation: animateLoader 1.7s infinite;
  }

  .dot:nth-child(4) {
    animation: animateLoader 1.1s infinite;
  }

  .dot:nth-child(5) {
    animation: animateLoader 0.9s infinite;
  }

  .dot:nth-child(6) {
    animation: animateLoader 0.7s infinite;
  }

  .dot:nth-child(7) {
    animation: animateLoader 0.5s infinite;
  }

  .dot:nth-child(8) {
    animation: animateLoader 1.3s infinite;
  }

  .dot:nth-child(9) {
    animation: animateLoader 1.5s infinite;
  }

  @keyframes animateLoader {
    0% {
      transform: scale(1);
    }

    50% {
      transform: scale(1.5);
      opacity: 1;
    }

    100% {
      transform: scale(1);
      opacity: 0.6;
    }
  }
`;
