"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const navigation_1 = require("next/navigation");
function Header(props) {
    const router = (0, navigation_1.useRouter)();
    return (react_1.default.createElement("div", { className: "flex flex-col items-start justify-start w-full select-none bg-vapormintBlack-300" },
        react_1.default.createElement("div", { className: "flex items-center w-full p-4 pl-3 " },
            react_1.default.createElement("div", { onClick: () => router.back(), className: "flex items-center justify-start w-1/4 gap-1 text-base font-bold cursor-pointer text-vapormintWhite-100" },
                react_1.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: "1.5", stroke: "currentColor", className: "w-6 h-6 " },
                    react_1.default.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M15.75 19.5L8.25 12l7.5-7.5" })),
                props.text),
            react_1.default.createElement("span", { className: "w-2/4 text-2xl font-black text-center text-vapormintWhite-100" }, props.title),
            react_1.default.createElement("div", { className: "flex items-center justify-end w-1/4 gap-4" }, props.rightSection)),
        react_1.default.createElement("span", { style: { height: `1px` }, className: `  w-full  bg-gradient-to-r from-vapormintWhite-100 to-vapormintBlack-300"` })));
}
exports.default = Header;
//# sourceMappingURL=Header.js.map