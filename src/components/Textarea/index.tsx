import { forwardRef } from "react";
import { StyleTextArea } from "./style";
import { ITextAreaProps } from "./types";

export const Textarea = forwardRef<HTMLTextAreaElement, ITextAreaProps>(
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
