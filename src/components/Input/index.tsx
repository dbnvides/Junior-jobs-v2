import { forwardRef, InputHTMLAttributes, useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

import { StyleField } from "./style";

interface iInputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: string;
  placeholder: string;
  label?: string;
}
export const Input = forwardRef<HTMLInputElement, iInputProps>(
  ({ label, type, placeholder, ...rest }, ref) => {
    const [showPass, setShowPass] = useState(false);
    const [icon, setIcon] = useState(false);

    function show() {
      setShowPass(!showPass);
      setIcon(!icon);
    }

    return (
      <StyleField>
        {label && <label htmlFor={type}>{label}</label>}
        <input
          type={showPass ? "text" : type}
          placeholder={placeholder}
          ref={ref}
          {...rest}
        />
        {type === "password" && (
          <i onClick={() => show()}>
            {icon ? (
              <FiEyeOff color="var(--color-grey-0)" />
            ) : (
              <FiEye color="var(--color-grey-0)" />
            )}
          </i>
        )}
      </StyleField>
    );
  }
);
