const ArrowDown = ({
  stroke = "currentColor",
  fill = "currentColor",
  strokeWidth = "0",
  height = "1em",
  width = "1em",
}) => {
  return (
    <svg
      stroke={stroke}
      fill={fill}
      strokeWidth={strokeWidth}
      height={height}
      width={width}
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M128 192l128 128 128-128z" />
    </svg>
  );
};

export default ArrowDown;
