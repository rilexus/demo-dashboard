import React from "react";

const ExitOutlinedIcon = ({
  stroke = "currentColor",
  fill = "currentColor",
  height = "1em",
  width = "1em",
  ...props
}) => {
  return (
    <svg
      {...props}
      stroke={stroke}
      fill={fill}
      height={height}
      width={width}
      viewBox="0 0 512 512"
      strokeWidth="0"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeWidth="32"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M320 176v-40a40 40 0 00-40-40H88a40 40 0 00-40 40v240a40 40 0 0040 40h192a40 40 0 0040-40v-40m64-160l80 80-80 80m-193-80h273"
      ></path>
    </svg>
  );
};

export default ExitOutlinedIcon;
