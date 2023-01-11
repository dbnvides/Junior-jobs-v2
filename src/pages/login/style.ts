import styled from "styled-components";

export const StyleSection = styled.section`
  width: 90%;
  max-width: 500px;
  height: 100%;
  margin: 0 auto;
  box-shadow: 0px 0px 11px 0px rgba(0, 0, 0, 0.75);
  margin-top: 85px;
  border-radius: var(--radius-1);

  && div {
    width: 100%;
    border-bottom: solid 1px #6e809830;
  }

  && div h2 {
    width: 90%;
    margin: 0 auto;
    padding: 20px 0;

    font-size: var(--title-2);
    font-weight: var(--bold);
    color: var(--grey-5);
  }
  && form {
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 12px;

    margin-top: 22px;
  }

  && form button {
    width: 100%;
    height: 48px;
    font-size: var(--title-5);
    font-weight: var(--bold);
    background-color: var(--color-primary);
    color: white;
    border-radius: var(--radius-1);
    margin-top: 10px;
  }

  && form span {
    text-align: center;
    font-size: var(--title-4);
    font-weight: var(--bold);
  }

  && a {
    width: 100%;
    height: 48px;
    background-color: #e9e8e8;
    font-size: var(--title-5);
    font-weight: var(--bold);
    color: var(--color-primary);
    border-radius: var(--radius-1);
    text-align: center;
    padding-top: 15px;
    margin-bottom: 40px;
  }
`;
