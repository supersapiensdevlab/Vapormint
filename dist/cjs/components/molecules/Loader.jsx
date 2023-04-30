"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
function Loader(props) {
    return (<div className="w-full p-1">
      <div className="flex items-center justify-start w-full h-2 overflow-hidden rounded-full bg-vapormintWhite-100">
        <span style={{ width: `${props.progress}%` }} className={`bg-vapormintSuccess-500 h-full transition-all ease-in-out cursor-pointer  delay-150`}></span>
      </div>
    </div>);
}
exports.default = Loader;
//# sourceMappingURL=Loader.jsx.map