import styled from "styled-components";

export const StyledMain = styled.main`
  display: flex;
  flex-direction: column;

  padding: 16px;
  gap: 32px;

  height: 100vh;
  margin-top: 16px;

  p {
    color: var(--grey-3);
  }

  h1,h2,h3,h4,h5 {
    color: var(--grey-4);
  }

  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 320px;

    gap: 16px;

    background-color: var(--color-primary-3);

    border: 1px solid transparent;
    border-radius: var(--radius-2);

    position: relative;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

    div {
      min-width: 50px;
      min-height: 50px;
      max-width: 50px;
      max-height: 50px;

      border-radius: var(--radius-2);

      overflow: hidden;
      position: absolute;
      top: -30px;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    span {
      text-align: center;

      p {
        margin: 16px 0 8px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }

    a {
      display: flex;
      align-items: center;
      justify-content: center;

      width: max-content;
      height: 48px;

      background-color: var(--grey-1);
      color: var(--color-primary-4);
      border-radius: var(--radius-1);

      padding: 0 16px;
      font-weight: 700;
    }
  }

  .description {
    display: flex;
    flex-direction: column;

    width: 100%;
    height: max-content;
    min-height: 70vh;

    overflow: auto;

    gap: 16px;
    padding: 32px 16px;

    background-color: var(--white);
    border-radius: var(--radius-2);
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

    button {
      display: flex;
      align-items: center;
      justify-content: center;

      min-height: 48px;

      background-color: var(--color-primary);
      border-radius: var(--radius-1);

      color: white;
      font-weight: 500;

      margin: 32px 0 16px;
    }

    .margin {
      margin-bottom: 40px;
    }
  }

  @media (min-width: 768px) {
    .text{
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .card {
      margin: 0 auto;

      flex-direction: row;
      justify-content: flex-start;
      align-items: center;

      height: 140px;
      width: 730px;

      gap: 50px;

      span{
        max-width: 40%;
      }

      div {
        display: flex;
        align-items: center;
        justify-content: center;

        min-width: 140px;
        min-height: 140px;

        position: relative;
        top: 0;
      }

      a {
        position: absolute;
        right: 32px;
      }
    }

    .description {
      position: relative;
      justify-content: flex-start;

      button {
        position: absolute;
        top: 0;
        right: 16px;

        width: 210px;
      }

      h3{
      width: 60%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

      p{
      width: 80%;
      overflow: hidden;
      }

      h5 {
        position: relative;
        bottom: 8px;
      }

      .margin {
        margin-bottom: 60px;
      }
    }
  }
`;
