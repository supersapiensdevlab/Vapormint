import React from "react";

export interface LoaderProps {
  progress: number;
}

export function Loader(props: LoaderProps) {
  return (
    <div className="w-full p-1">
      <div className="flex items-center justify-start w-full h-2 overflow-hidden rounded-full bg-vapormintWhite-100">
        <span
          style={{ width: `${props.progress}%` }}
          className={`bg-vapormintSuccess-500 h-full transition-all ease-in-out cursor-pointer  delay-150`}
        ></span>
      </div>
    </div>
  );
}
