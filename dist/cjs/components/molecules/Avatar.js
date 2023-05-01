"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const image_1 = __importDefault(require("next/image"));
const react_1 = __importDefault(require("react"));
function Avatar(props) {
    return (react_1.default.createElement("div", { className: "p-1" },
        react_1.default.createElement(image_1.default, { className: `border-[2px] ${props.kind === "default"
                ? "border-vapormintWhite-100"
                : props.kind === "mint"
                    ? "border-vapormintMint-300"
                    : props.kind === "info"
                        ? "border-vapormintBlue-300"
                        : props.kind === "danger"
                            ? "border-vapormintError-500"
                            : props.kind === "luxury"
                                ? "border-vapormintLuxury-300"
                                : props.kind === "warning"
                                    ? "border-vapormintWarning-500"
                                    : props.kind === "success" && "border-vapormintSuccess-500"} rounded-full`, src: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60", alt: "userImage", width: props.size === "xs"
                ? 24
                : props.size === "sm"
                    ? 32
                    : props.size === "md"
                        ? 40
                        : props.size === "lg"
                            ? 48
                            : 24, height: props.size === "xs"
                ? 24
                : props.size === "sm"
                    ? 32
                    : props.size === "md"
                        ? 40
                        : props.size === "lg"
                            ? 48
                            : 24 })));
}
exports.default = Avatar;
//# sourceMappingURL=Avatar.js.map