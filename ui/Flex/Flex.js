import React, { createElement, forwardRef } from "react";
import { useStyle } from "../hooks";

const JUSTIFY = {
  around: "space-around",
  between: "space-between",
  center: "center",
  left: "left",
  end: "end",
};

const ALIGN = {
  start: "start",
  center: "center",
};

const WRAP = {
  wrap: "wrap",
};

const Flex = forwardRef(function Flex(
  {
    children,
    style,
    direction = "row",
    justify = "normal",
    align = ALIGN.start,
    wrap = "inherit",
    as = "div",
    ...props
  },
  ref
) {
  const s = useStyle(
    {
      ...style,
      display: "flex",
      justifyContent: justify,
      alignItems: align,
      flexWrap: wrap,
      flexDirection: direction,
    },
    [style, justify, align, wrap, direction]
  );
  return createElement(
    as,
    {
      ...props,
      ref,
      style: s,
    },
    children
  );
});
export { JUSTIFY, ALIGN, WRAP };
export default Flex;
