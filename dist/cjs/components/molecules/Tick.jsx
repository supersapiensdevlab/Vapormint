"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
function Tick(props) {
    return (<div className={`p-[1px]   `}>
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.51861 0.603067C7.32982 -0.201022 8.67018 -0.201022 9.48139 0.603067C9.95675 1.07426 10.6429 1.28903 11.315 1.17698C12.462 0.985774 13.5463 1.74469 13.712 2.85453C13.809 3.50489 14.2331 4.06717 14.8452 4.35706C15.8898 4.85177 16.304 6.07972 15.7608 7.07138C15.4425 7.65249 15.4425 8.34751 15.7608 8.92862C16.304 9.92028 15.8898 11.1482 14.8452 11.6429C14.2331 11.9328 13.809 12.4951 13.712 13.1455C13.5463 14.2553 12.462 15.0142 11.315 14.823C10.6429 14.711 9.95675 14.9257 9.48139 15.3969C8.67018 16.201 7.32982 16.201 6.51861 15.3969C6.04325 14.9257 5.35706 14.711 4.68496 14.823C3.53803 15.0142 2.45366 14.2553 2.28803 13.1455C2.19096 12.4951 1.76687 11.9328 1.15476 11.6429C0.110209 11.1482 -0.303984 9.92028 0.239218 8.92862C0.557534 8.34751 0.557534 7.65249 0.239218 7.07138C-0.303984 6.07972 0.110209 4.85177 1.15476 4.35706C1.76687 4.06717 2.19096 3.50489 2.28803 2.85453C2.45366 1.74469 3.53803 0.985774 4.68496 1.17698C5.35706 1.28903 6.04325 1.07426 6.51861 0.603067Z" fill={`${props.color === "blue"
            ? "#4900FF"
            : props.color === "gray"
                ? "#434343"
                : props.color === "green"
                    ? "#06C270"
                    : props.color === "purple"
                        ? "#9600FF"
                        : props.color === "red"
                            ? "#EE4D37"
                            : props.color === "yellow"
                                ? "#FDC500"
                                : "#4900FF"}`}/>
        <path d="M10.9322 5.46433C11.2422 5.67774 11.3141 6.09287 11.0926 6.39155L7.6414 11.0458C7.52321 11.2051 7.33852 11.306 7.1363 11.322C6.93408 11.338 6.73501 11.2679 6.59166 11.1298L4.52094 9.13513C4.25132 8.8754 4.25132 8.45421 4.52094 8.19448C4.79057 7.93519 5.22736 7.93519 5.49698 8.19448L6.9916 9.63423L9.96916 5.61887C10.0918 5.45307 10.2792 5.35784 10.4747 5.34269C10.6315 5.33014 10.7938 5.3691 10.9322 5.46433Z" fill="white"/>
      </svg>
    </div>);
}
exports.default = Tick;
//# sourceMappingURL=Tick.jsx.map