import React from "react";
type Props = {
    text: String;
    size: "xsmall" | "small" | "base";
    onClick: React.MouseEventHandler<HTMLDivElement> | undefined;
    showText: Boolean;
    kind: "default" | "mint" | "info" | "danger" | "luxury" | "warning" | "success";
};
declare function Fab(props: Props): JSX.Element;
export default Fab;
