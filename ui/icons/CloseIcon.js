import React from "react";

const CloseIcon = ({
  stroke = "currentColor",
  fill = "currentColor",
  height = "1em",
  width = "1em",
  strokeWidth = "2",
}) => {
  return (
    <svg
      stroke="currentColor"
      fill={fill}
      height={height}
      width={width}
      strokeWidth="0"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        d="M3,3 L21,21 M3,21 L21,3"
      />
    </svg>
  );
};

export default CloseIcon;
