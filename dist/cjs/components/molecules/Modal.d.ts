import React from "react";
type Props = {
    title?: String;
    description?: String;
    onCancel: Function;
    children: React.ReactNode;
};
export default function Modal(props: Props): JSX.Element;
export {};
