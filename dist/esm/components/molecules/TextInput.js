import React from "react";
function TextInput(props) {
    var _a, _b;
    return (React.createElement("div", { className: "flex flex-col items-start justify-start w-full gap-1 py-1" },
        props.title && (React.createElement("span", { className: "text-xs font-semibold tracking-widest uppercase text-vapormintWhite-100" }, props.title)),
        React.createElement("input", { className: `w-full h-12 text-base border-b rounded-none text-vapormintWhite-100 bg-vapormintBlack-300  ${props.error
                ? "border-vapormintError-500"
                : "border-vapormintBlack-200 focus:border-vapormintWhite-100"}  focus:outline-none `, onChange: props.onChange, value: props.value, placeholder: props.placeholder }),
        React.createElement("div", { className: "flex items-center justify-between w-full" },
            props.error && (React.createElement("span", { className: "text-sm tracking-wider text-vapormintError-500 " }, props.error)),
            props.count && (React.createElement("span", { className: `ml-auto ${((_a = props.value) === null || _a === void 0 ? void 0 : _a.length) >= props.count
                    ? "text-lg text-vapormintError-500 font-bold"
                    : "text-xs text-vapormintWarning-500 font-semibold"}    font-semibold uppercase transition-all ease-in-out` }, (_b = props.value) === null || _b === void 0 ? void 0 :
                _b.length,
                " / ",
                props.count)))));
}
export default TextInput;
//# sourceMappingURL=TextInput.js.map