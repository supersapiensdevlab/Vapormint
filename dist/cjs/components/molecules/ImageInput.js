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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_easy_crop_1 = __importDefault(require("react-easy-crop"));
const FullScreenOverlay_1 = __importDefault(require("./FullScreenOverlay"));
const Button_1 = __importDefault(require("./Button"));
function sanitizeFilename(file) {
    const newFilename = file.name.replace(/[^a-zA-Z0-9\.]/g, "_");
    const renamedFile = new File([file], newFilename, { type: file.type });
    return renamedFile;
}
const createImage = (url) => new Promise((resolve, reject) => {
    const image = new Image();
    image.addEventListener("load", () => resolve(image));
    image.addEventListener("error", (error) => reject(error));
    image.setAttribute("crossOrigin", "anonymous"); // needed to avoid cross-origin issues on CodeSandbox
    image.src = url;
});
function getRadianAngle(degreeValue) {
    return (degreeValue * Math.PI) / 180;
}
/**
 * Returns the new bounding area of a rotated rectangle.
 */
function rotateSize(width, height, rotation) {
    const rotRad = getRadianAngle(rotation);
    return {
        width: Math.abs(Math.cos(rotRad) * width) + Math.abs(Math.sin(rotRad) * height),
        height: Math.abs(Math.sin(rotRad) * width) + Math.abs(Math.cos(rotRad) * height),
    };
}
/**
 * This function was adapted from the one in the ReadMe of https://github.com/DominicTobias/react-image-crop
 */
function getCroppedImg(imageSrc, pixelCrop, rotation = 0, compression, flip = { horizontal: false, vertical: false }) {
    return __awaiter(this, void 0, void 0, function* () {
        const image = yield createImage(imageSrc);
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        if (!ctx) {
            return null;
        }
        const rotRad = getRadianAngle(rotation);
        // calculate bounding box of the rotated image
        const { width: bBoxWidth, height: bBoxHeight } = rotateSize(image.width, image.height, rotation);
        // set canvas size to match the bounding box
        canvas.width = bBoxWidth;
        canvas.height = bBoxHeight;
        // translate canvas context to a central location to allow rotating and flipping around the center
        ctx.translate(bBoxWidth / 2, bBoxHeight / 2);
        ctx.rotate(rotRad);
        ctx.scale(flip.horizontal ? -1 : 1, flip.vertical ? -1 : 1);
        ctx.translate(-image.width / 2, -image.height / 2);
        // draw rotated image
        ctx.drawImage(image, 0, 0);
        // croppedAreaPixels values are bounding box relative
        // extract the cropped image using these values
        const data = ctx.getImageData(pixelCrop.x, pixelCrop.y, pixelCrop.width, pixelCrop.height);
        // set canvas width to final desired crop size - this will clear existing context
        canvas.width = pixelCrop.width;
        canvas.height = pixelCrop.height;
        // paste generated rotate image at the top left corner
        ctx.putImageData(data, 0, 0);
        // As Base64 string
        // return canvas.toDataURL('image/jpeg');
        // As a blob
        return new Promise((resolve, reject) => {
            canvas.toBlob((file) => {
                resolve(URL.createObjectURL(file));
            }, "image/webp", compression);
        });
    });
}
function ImageInput({ image, setImage, label, aspect, cropShape, showGrid, compression, }) {
    var _a;
    const [crop, setCrop] = (0, react_1.useState)({ x: 0, y: 0 });
    const [rotation, setRotation] = (0, react_1.useState)(0);
    const [zoom, setZoom] = (0, react_1.useState)(1);
    // @ts-ignore
    const [croppedAreaPixels, setCroppedAreaPixels] = (0, react_1.useState)(null);
    const hiddenFileInput = (0, react_1.useRef)(null);
    const [cropperOpen, setcropperOpen] = (0, react_1.useState)(false);
    const [selectedFile, setselectedFile] = (0, react_1.useState)(null);
    const [imageUrl, setimageUrl] = (0, react_1.useState)("");
    const onCropComplete = (0, react_1.useCallback)((croppedArea, croppedAreaPixels) => __awaiter(this, void 0, void 0, function* () {
        try {
            const croppedImage = yield getCroppedImg(selectedFile === null || selectedFile === void 0 ? void 0 : selectedFile.localurl, croppedAreaPixels, rotation, compression);
            console.log("donee", { croppedImage });
            const response = yield fetch(croppedImage);
            const blob = yield response.blob();
            const myNewFile = new File([blob], "image", {
                type: blob.type,
            });
            console.log("Compressed Image", myNewFile);
            setImage(myNewFile);
            setimageUrl(croppedImage);
        }
        catch (e) {
            console.error(e);
        }
    }), [croppedAreaPixels, rotation, selectedFile]);
    // const onClose = useCallback(async () => {}, []);
    const handleClick = () => {
        hiddenFileInput === null || hiddenFileInput === void 0 ? void 0 : hiddenFileInput.current.click();
    };
    const handleImageChange = (event) => {
        // Update the state
        var _a;
        const file = sanitizeFilename(event.target.files[0]);
        console.log(file);
        setselectedFile({
            file: [file],
            localurl: URL.createObjectURL(event.target.files[0]),
        });
        ((_a = event.target.files[0]) === null || _a === void 0 ? void 0 : _a.size) < 2000000 && setcropperOpen(true);
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: "flex flex-col items-center w-full gap-2 p-1 border-2 border-dashed rounded-lg border-vapormintBlack-200 text-brand4" },
            (selectedFile === null || selectedFile === void 0 ? void 0 : selectedFile.localurl) && cropperOpen && (react_1.default.createElement(FullScreenOverlay_1.default, { title: "Crop Image", onClose: () => {
                    setcropperOpen(false);
                } },
                react_1.default.createElement("div", { className: "flex flex-col items-center justify-start w-full h-full max-w-lg gap-2 p-1 overflow-hidden" },
                    react_1.default.createElement("div", { className: "relative flex-grow w-full overflow-hidden rounded-lg" },
                        react_1.default.createElement(react_easy_crop_1.default, { image: selectedFile === null || selectedFile === void 0 ? void 0 : selectedFile.localurl, crop: crop, rotation: rotation, zoom: zoom, aspect: aspect, cropShape: cropShape, showGrid: showGrid, onCropChange: setCrop, onRotationChange: setRotation, onCropComplete: onCropComplete, onZoomChange: setZoom, style: {
                                containerStyle: {
                                    height: "100%",
                                    width: "100%",
                                    backgroundColor: "transparent",
                                },
                                mediaStyle: {
                                    backgroundColor: "transparent",
                                },
                                cropAreaStyle: {
                                    width: "100%",
                                    backgroundColor: "transparent",
                                },
                            } })),
                    " ",
                    react_1.default.createElement(Button_1.default, { handleClick: () => setcropperOpen(false), kind: "success", type: "solid", size: "base" }, "Done")))),
            selectedFile && ((_a = selectedFile.file[0]) === null || _a === void 0 ? void 0 : _a.size) > 2000000 && (react_1.default.createElement("span", { className: "text-base font-semibold tracking-wider text-vapormintError-500 " }, "File size must be less than 2MB.")),
            imageUrl && react_1.default.createElement("img", { className: "w-full max-w-lg rounded", src: imageUrl }),
            react_1.default.createElement("label", { className: "flex items-start w-full gap-2 p-2 cursor-pointer " }, selectedFile ? (selectedFile.file && (react_1.default.createElement(Button_1.default, { handleClick: handleClick, kind: "warning", type: "ghost", size: "small" }, "Choose another photo"))) : (react_1.default.createElement("div", { onClick: handleClick, className: "flex items-center w-full gap-2 text-base font-semibold capitalize text-vapormintWhite-100" },
                react_1.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: "1.5", stroke: "currentColor", className: "w-6 h-6 " },
                    react_1.default.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" })),
                label))),
            react_1.default.createElement("input", { ref: hiddenFileInput, type: "file", accept: "image/*", onChange: handleImageChange, className: "sr-only", onClick: (event) => {
                    event.target.value = null;
                    setselectedFile(null);
                    console.log("setting null");
                } }))));
}
exports.default = ImageInput;
//# sourceMappingURL=ImageInput.js.map