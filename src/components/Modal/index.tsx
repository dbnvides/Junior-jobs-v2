import { useState } from "react";
import { StyleModalBase } from "./modaBase";

interface Props {
  title: string;
  children: React.ReactNode;
}

export const ModalBase = ({ children, title }: Props) => {
  const [isVisible, setVisible] = useState(false);

  if (isVisible) {
    return (
      <StyleModalBase>
        <div className="container">
          <div className="modalHeader">
            <h3>{title}</h3>
            <button
              onClick={() => {
                setVisible(false);
              }}
            >
              x
            </button>
          </div>
          {children}
        </div>
      </StyleModalBase>
    );
  }
  return null;
};
