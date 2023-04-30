import React from "react";
type Props = {
    children: React.ReactNode;
    kind: "default" | "mint" | "info" | "error" | "luxury" | "warning" | "success";
    type: "outlined" | "filled";
};
export default function Pill(props: Props): JSX.Element;
export {};
