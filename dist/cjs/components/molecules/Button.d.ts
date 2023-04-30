import React from "react";
type buttonProps = {
    handleClick: React.MouseEventHandler<HTMLDivElement>;
    kind: "mint" | "info" | "success" | "warning" | "luxury" | "danger" | "white";
    type: "solid" | "outlined" | "ghost";
    size: "small" | "base";
    children: any;
};
declare function Button({ kind, type, size, handleClick, children }: buttonProps): JSX.Element;
export default Button;
