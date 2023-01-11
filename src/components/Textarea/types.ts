import { TextareaHTMLAttributes } from "react";

export interface ITextAreaProps
    extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    id: string;
    placeholder: string;
    label?: string;
}
