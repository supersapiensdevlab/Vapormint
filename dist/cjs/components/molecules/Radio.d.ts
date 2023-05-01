/// <reference types="react" />
type Props = {
    flex: "col" | "row";
    value: String;
    disabled?: Boolean;
    onChange: Function;
    options: {
        color: "default" | "mint" | "info" | "danger" | "luxury" | "warning" | "success";
        option: String;
    }[];
};
export default function Radio(props: Props): JSX.Element;
export {};
