import React from "react";

const WidgetsFilledIcon = ({
  stroke = "currentColor",
  fill = "currentColor",
  height = "1em",
  width = "1em",
  strokeWidth = "0",
}) => {
  return (
    <svg
      stroke={stroke}
      fill={fill}
      height={height}
      width={width}
      strokeWidth={strokeWidth}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M13 13v8h8v-8h-8zM3 21h8v-8H3v8zM3 3v8h8V3H3zm13.66-1.31L11 7.34 16.66 13l5.66-5.66-5.66-5.65z" />
    </svg>
  );
};

export default WidgetsFilledIcon;
