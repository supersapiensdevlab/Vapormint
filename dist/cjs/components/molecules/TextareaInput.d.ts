import React from "react";
type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
    title?: String;
    error?: String;
    onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
    value: String;
    placeholder?: String;
    count?: number;
};
declare function TextareaInput(props: Props): JSX.Element;
export default TextareaInput;
