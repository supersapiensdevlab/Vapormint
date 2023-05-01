"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const hooks_1 = require("@mantine/hooks");
function Modal(props) {
    const [animation, setAnimation] = (0, react_1.useState)(false);
    const { height, width } = (0, hooks_1.useViewportSize)();
    (0, react_1.useEffect)(() => {
        setTimeout(() => {
            setAnimation(true);
        }, 200);
    }, []);
    return height && width ? (react_1.default.createElement("div", { style: { height: height, width: width }, className: `fixed top-0 left-0 z-50 flex items-end justify-center   select-none   backdrop-blur-sm  ${animation ? "bg-vapormintBlack-300/25" : "bg-vapormintBlack-300/0"} transition-colors ease-in-out` },
        react_1.default.createElement("div", { className: `flex flex-col max-w-xl items-center w-full h-fit   ${animation ? "translate-y-0" : "translate-y-full"} transition-all ease-in-out` },
            react_1.default.createElement("div", { className: "flex w-full h-2 px-2" },
                react_1.default.createElement("span", { className: "flex-grow h-2 rounded-t-lg bg-vapormintBlack-100" })),
            react_1.default.createElement("div", { className: "flex flex-col items-start justify-start w-full p-6 rounded-t-lg bg-vapormintWhite-100" },
                react_1.default.createElement("div", { className: "flex items-center justify-between w-full" },
                    react_1.default.createElement("span", { className: "text-3xl font-black text-vapormintBlack-300" }, props.title),
                    react_1.default.createElement("svg", { onClick: () => {
                            setAnimation(false);
                            setTimeout(() => {
                                props.onCancel();
                            }, 200);
                        }, xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: "1.5", stroke: "currentColor", className: "w-6 h-6 cursor-pointer text-vapormintBlack-300" },
                        react_1.default.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M6 18L18 6M6 6l12 12" }))),
                react_1.default.createElement("span", { className: "w-full text-lg font-medium text-vapormintBlack-100" }, props.description),
                props.children)))) : (react_1.default.createElement(react_1.default.Fragment, null));
}
exports.default = Modal;
//# sourceMappingURL=Modal.js.map