import React from "react";
type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
    title?: String;
    error?: String;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    value: String;
    placeholder?: String;
    count?: number;
};
declare function TextInput(props: Props): JSX.Element;
export default TextInput;
