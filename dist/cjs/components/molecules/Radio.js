"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
function Radio(props) {
    return (react_1.default.createElement("div", { className: `flex ${props.flex === "col" && "flex-col"} gap-2 items-center justify-start p-1` }, props.options.map((option, id) => (react_1.default.createElement("div", { key: id, onClick: () => (props.disabled ? "" : props.onChange(option.option)), className: "flex items-center gap-2 p-1 cursor-pointer select-none" },
        react_1.default.createElement("div", { className: `w-6 h-6  ${props.disabled
                ? "border-vapormintBlack-200"
                : option.color === "default"
                    ? "border-vapormintWhite-100"
                    : option.color === "mint"
                        ? "border-vapormintMint-300"
                        : option.color === "info"
                            ? "border-vapormintBlue-300"
                            : option.color === "danger"
                                ? "border-vapormintError-500"
                                : option.color === "luxury"
                                    ? "border-vapormintLuxury-300"
                                    : option.color === "warning"
                                        ? "border-vapormintWarning-500"
                                        : option.color === "success" && "border-vapormintSuccess-500"} border-[2px] rounded-lg flex items-center justify-center` },
            react_1.default.createElement("div", { className: `w-4 h-4 ${props.value === option.option ? "scale-100" : "scale-0"} ${option.color === "default"
                    ? "bg-vapormintWhite-100"
                    : option.color === "mint"
                        ? "bg-vapormintMint-300"
                        : option.color === "info"
                            ? "bg-vapormintBlue-300"
                            : option.color === "danger"
                                ? "bg-vapormintError-500"
                                : option.color === "luxury"
                                    ? "bg-vapormintLuxury-300"
                                    : option.color === "warning"
                                        ? "bg-vapormintWarning-500"
                                        : option.color === "success" && "bg-vapormintSuccess-500"} transition-all ease-in-out rounded-[4px] origin-center` })),
        option.option && (react_1.default.createElement("span", { className: "text-sm font-semibold tracking-wide" }, option.option)))))));
}
exports.default = Radio;
//# sourceMappingURL=Radio.js.map