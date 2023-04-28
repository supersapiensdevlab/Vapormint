/// <reference types="react" />
declare function ImageInput({ image, setImage, label, aspect, cropShape, showGrid, compression, }: {
    image?: string;
    setImage: Function;
    label?: string;
    aspect?: number;
    cropShape?: "rect" | "round";
    showGrid?: boolean;
    compression: number;
}): JSX.Element;
export default ImageInput;
