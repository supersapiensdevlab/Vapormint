import React from "react";
type Props = {
    message: String;
    description?: String;
    onCancel: Function;
    kind?: "default" | "mint" | "info" | "error" | "luxury" | "warning" | "success";
    icon?: React.ReactNode;
};
export default function Notification(props: Props): JSX.Element;
export {};
