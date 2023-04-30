"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
function Divider(props) {
    return (<span style={{ height: `${props.size}px` }} className={`my-1  w-full ${props.kind === "center" &&
            "bg-gradient-to-r from-vapormintBlack-300 via-vapormintWhite-100 to-vapofrom-vapormintBlack-300"}
      ${props.kind === "left-right" &&
            "bg-gradient-to-r from-vapormintWhite-100 to-vapormintBlack-300"}
     ${props.kind === "right-left" &&
            "bg-gradient-to-l from-vapormintWhite-100 to-vapormintBlack-300"} ${props.kind === "solid" && "bg-vapormintBlack-200"}`}/>);
}
exports.default = Divider;
//# sourceMappingURL=Divider.jsx.map