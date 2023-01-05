import { forwardRef, TextareaHTMLAttributes } from "react";
import { StyleTextArea } from "./style";

interface iTextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    id: string;
    placeholder: string;
    label?: string;
}
export const Textarea = forwardRef<HTMLTextAreaElement, iTextAreaProps>(
    ({ label, id, placeholder, ...rest }, ref) => {
        return (
            <StyleTextArea>
                {label && <label htmlFor={id}>{label}</label>}
                <textarea
                    id={id}
                    placeholder={placeholder}
                    ref={ref}
                    {...rest}
                />
            </StyleTextArea>
        );
    }
);
