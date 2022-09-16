import React from "react";

const PersonFilledIcon = ({
  stroke = "currentColor",
  fill = "currentColor",
  height = "1em",
  width = "1em",
}) => {
  return (
    <svg
      stroke={stroke}
      fill={fill}
      height={height}
      width={width}
      viewBox="0 0 16 16"
      strokeWidth="0"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
    </svg>
  );
};

export default PersonFilledIcon;
