import { forwardRef, InputHTMLAttributes } from "react";
import { StyleField } from "./style";

interface iInputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: string;
  placeholder: string;
  label?: string;
}
export const Input = forwardRef<HTMLInputElement, iInputProps>(
  ({ label, type, placeholder, ...rest }, ref) => {
    return (
      <StyleField>
        {label && <label htmlFor={type}>{label}</label>}
        <input type={type} placeholder={placeholder} ref={ref} {...rest} />
      </StyleField>
    );
  }
);