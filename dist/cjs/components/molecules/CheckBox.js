"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
function CheckBox(props) {
    return (react_1.default.createElement("div", { onClick: () => props.onChange(), className: "flex items-center gap-2 p-1 cursor-pointer select-none" },
        react_1.default.createElement("div", { className: `w-6 h-6  ${props.checked
                ? "bg-vapormintSuccess-500"
                : "border-white border-[2px]"}  rounded-lg flex items-center justify-center` },
            react_1.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: "4", stroke: "currentColor", className: `w-4 h-4 ${props.checked ? "scale-100" : "scale-0"} transition-all ease-in-out  origin-center` },
                react_1.default.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M4.5 12.75l6 6 9-13.5" }))),
        props.text && (react_1.default.createElement("span", { className: "text-sm font-semibold tracking-wide" }, props.text))));
}
exports.default = CheckBox;
//# sourceMappingURL=CheckBox.js.map