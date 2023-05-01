"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
function Switch(props) {
    return (react_1.default.createElement("div", { onClick: () => (props.disabled ? "" : props.onChange()), className: "p-1 cursor-pointer " },
        react_1.default.createElement("div", { className: `h-fit  w-11 ${props.disabled
                ? "border-vapormintBlack-200"
                : props.kind === "default"
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
                                        : props.kind === "success" && "border-vapormintSuccess-500"} border-[1px] p-[3px] rounded-lg flex items-center  justify-start ` },
            react_1.default.createElement("div", { className: `h-4 w-4  rounded-[4px] transition-all ease-in-out ${props.on
                    ? `translate-x-5 ${props.kind === "default"
                        ? "bg-vapormintWhite-100"
                        : props.kind === "mint"
                            ? "bg-vapormintMint-300"
                            : props.kind === "info"
                                ? "bg-vapormintBlue-300"
                                : props.kind === "danger"
                                    ? "bg-vapormintError-500"
                                    : props.kind === "luxury"
                                        ? "bg-vapormintLuxury-300"
                                        : props.kind === "warning"
                                            ? "bg-vapormintWarning-500"
                                            : props.kind === "success" && "bg-vapormintSuccess-500"}`
                    : "bg-vapormintBlack-200"}` }))));
}
exports.default = Switch;
//# sourceMappingURL=Switch.js.map