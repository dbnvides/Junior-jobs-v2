import styled from "styled-components";

export const StyledMenu = styled.div`
  background-color: white;
  position: relative;

  .menuButton {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 13%;
    color: #090909;
    width: 80px;
    height: 50px;
    border-radius: 4px;
    background: #e8e8e8;
    border: 1px solid #e8e8e8;
    transition: all 0.3s;
  }

  .menuButton:hover {
    border: 1px solid white;
  }

  .menuButton:active {
    color: #666;
    box-shadow: inset 4px 4px 12px #c5c5c5, inset -4px -4px 12px #ffffff;
  }

  input {
    -webkit-appearance: none;
    display: none;
    visibility: hidden;
  }

  .menuButton span {
    width: 30px;
    height: 4px;
    background: var(--color-primary);
    border-radius: 100px;
    transition: 0.3s ease;
  }

  input:checked ~ span.top {
    transform: translateY(290%) rotate(45deg);
    width: 40px;
  }

  input:checked ~ span.bot {
    transform: translateY(-270%) rotate(-45deg);
    width: 40px;
    box-shadow: 0 0 10px #495057;
  }

  input:checked ~ span.mid {
    transform: translateX(-20px);
    opacity: 0;
  }
`;
