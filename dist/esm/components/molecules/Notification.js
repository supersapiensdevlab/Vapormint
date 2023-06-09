import React from "react";
export default function Notification(props) {
    return (React.createElement("div", { className: "w-full p-1 select-none" },
        React.createElement("div", { className: `flex flex-col gap-0 overflow-hidden  rounded-lg ${props.kind === "default"
                ? "bg-vapormintWhite-100"
                : props.kind === "mint"
                    ? "bg-vapormintMint-300"
                    : props.kind === "info"
                        ? "bg-vapormintBlue-300"
                        : props.kind === "error"
                            ? "bg-vapormintError-500"
                            : props.kind === "luxury"
                                ? "bg-vapormintLuxury-300"
                                : props.kind === "warning"
                                    ? "bg-vapormintWarning-500"
                                    : props.kind === "success" && "bg-vapormintSuccess-500"}` },
            React.createElement("div", { className: "flex items-start gap-3 px-4 py-3 " },
                props.icon,
                React.createElement("div", { className: "flex flex-col flex-grow gap-1" },
                    React.createElement("span", { className: `w-full text-lg font-bold tracking-wide ${props.kind === "default"
                            ? "text-vapormintBlack-300"
                            : "text-vapormintWhite-100"}` }, props.message),
                    props.description && (React.createElement("span", { className: `w-full text-sm font-medium tracking-wide  ${props.kind === "default"
                            ? "text-vapormintBlack-100"
                            : "text-vapormintWhite-100"}` }, props.description))),
                React.createElement("svg", { onClick: () => props.onCancel(), xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: "1.5", stroke: "currentColor", className: `w-6 h-6 cursor-pointer ${props.kind === "default"
                        ? "text-vapormintBlack-300"
                        : "text-vapormintWhite-100"}` },
                    React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M6 18L18 6M6 6l12 12" }))),
            " ",
            React.createElement("span", { style: { height: `1px` }, className: `  w-full  bg-gradient-to-r  from-vapormintWhite-100 to-vapormintBlack-300` }))));
}
//# sourceMappingURL=Notification.js.map