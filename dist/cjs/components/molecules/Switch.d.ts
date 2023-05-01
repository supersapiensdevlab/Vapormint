/// <reference types="react" />
type Props = {
    on: Boolean;
    onChange: Function;
    disabled?: Boolean;
    kind: "default" | "mint" | "info" | "danger" | "luxury" | "warning" | "success";
};
export default function Switch(props: Props): JSX.Element;
export {};
