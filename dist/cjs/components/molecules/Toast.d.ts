type Props = {
    message: String;
    onCancel: Function;
    kind?: "default" | "mint" | "info" | "error" | "luxury" | "warning" | "success";
};
export default function Toast(props: Props): JSX.Element;
export {};
