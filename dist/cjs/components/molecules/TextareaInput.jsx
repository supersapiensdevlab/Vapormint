"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
function TextareaInput(props) {
    var _a, _b;
    return (<div className="flex flex-col items-start justify-start w-full gap-1 py-1">
      {props.title && (<span className="text-xs font-semibold tracking-widest uppercase text-vapormintWhite-100">
          {props.title}
        </span>)}
      <textarea className={`w-full h-20 text-base border-b rounded-none text-vapormintWhite-100 bg-vapormintBlack-300 hover:resize-y scrollbar scrollbar-thumb-gray-900 scrollbar-track-black ${props.error
            ? "border-vapormintError-500"
            : "border-vapormintBlack-200 focus:border-vapormintWhite-100"} focus:outline-none `} onChange={props.onChange} value={props.value} placeholder={props.placeholder}/>
      <div className="flex items-center justify-between w-full">
        {props.error && (<span className="text-sm tracking-wider text-vapormintError-500 ">
            {props.error}
          </span>)}
        {/* {props.count && props.value?.length >= props.count && (
          <span className="text-xs font-semibold tracking-wider text-red-700 uppercase ">
            word Limit exided
          </span>
        )} */}
        {props.count && (<span className={`ml-auto ${((_a = props.value) === null || _a === void 0 ? void 0 : _a.length) >= props.count
                ? "text-lg text-vapormintError-500 font-bold"
                : "text-xs text-vapormintWarning-500 font-semibold"}    font-semibold uppercase transition-all ease-in-out`}>
            {(_b = props.value) === null || _b === void 0 ? void 0 : _b.length} / {props.count}
          </span>)}
      </div>
    </div>);
}
exports.default = TextareaInput;
//# sourceMappingURL=TextareaInput.jsx.map