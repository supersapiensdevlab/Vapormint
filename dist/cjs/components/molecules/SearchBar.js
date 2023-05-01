"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
function SearchBar(props) {
    return (react_1.default.createElement("div", { className: ` flex flex-col items-center justify-start w-full` },
        react_1.default.createElement("div", { className: `flex items-center justify-start w-full gap-3 px-6 py-4 text-vapormintWhite-100 ${props.solid && "bg-vapormintBlack-200"}` },
            react_1.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: "1.5", stroke: "currentColor", className: `w-6 h-6 ` },
                react_1.default.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" })),
            react_1.default.createElement("input", { className: `flex-grow text-base font-semibold tracking-wider  h-fit focus:outline-none ${props.solid ? "bg-vapormintBlack-200" : " bg-vapormintBlack-300"}`, onChange: props.onChange, value: props.value, placeholder: props.placeholder }),
            react_1.default.createElement("svg", { onClick: () => props.onClear(), xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: "1.5", stroke: "currentColor", className: `w-6 h-6 ${!props.value && "scale-0"} transition-all ease-in-out cursor-pointer origin-center delay-150` },
                react_1.default.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M6 18L18 6M6 6l12 12" }))),
        react_1.default.createElement("span", { style: { height: `1px` }, className: `  w-full  bg-gradient-to-r from-vapormintBlack-300 via-vapormintWhite-100 to-vapormintBlack-300"` })));
}
exports.default = SearchBar;
//# sourceMappingURL=SearchBar.js.map