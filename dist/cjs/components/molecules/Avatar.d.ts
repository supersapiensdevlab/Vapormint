/// <reference types="react" />
type Props = {
    src?: String;
    size: "xs" | "sm" | "md" | "lg";
    kind: "default" | "mint" | "info" | "danger" | "luxury" | "warning" | "success";
};
export default function Avatar(props: Props): JSX.Element;
export {};
