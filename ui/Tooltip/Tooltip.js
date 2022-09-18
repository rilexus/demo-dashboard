import styled from "styled-components";
import { useEffect, useRef, useState } from "react";
import { useStyle } from "../hooks";
import { p35, roundedLg } from "../css";

const Fixed = styled.div`
  position: fixed;
`;

// TODO: handle window corners overlap
const Tooltip = ({ htmlFor, children }) => {
  const [
    {
      display,
      visible,
      position: { x, y },
    },
    setState,
  ] = useState({
    display: false,
    visible: false,
    position: { x: 0, y: 0 },
  });

  const ref = useRef();

  useEffect(() => {
    const element = document.getElementById(htmlFor);
    let timeout = null;

    const handleEnter = (e) => {
      const { clientX, clientY } = e;
      setState((s) => ({
        ...s,
        display: true,
        position: { x: clientX, y: clientY },
      }));

      timeout = setTimeout(() => {
        setState((s) => ({ ...s, visible: true }));
      }, 60);
    };

    const handleMove = (e) => {
      const { clientX, clientY } = e;
      setState((s) => ({ ...s, position: { x: clientX, y: clientY } }));
    };

    const handleLeave = () => {
      setState((s) => ({
        ...s,
        display: false,
        visible: false,
      }));
      clearTimeout(timeout);
    };

    if (element) {
      element.addEventListener("mouseenter", handleEnter);
      element.addEventListener("mousemove", handleMove);
      element.addEventListener("mouseleave", handleLeave);
    }
    return () => {
      clearTimeout(timeout);
      if (element) {
        element.removeEventListener("mouseenter", handleEnter);
        element.removeEventListener("mousemove", handleMove);
        element.removeEventListener("mouseleave", handleLeave);
      }
    };
  }, []);

  const childrenBoundingClientRect = ref.current?.getBoundingClientRect() || {};
  const { width = 10, height = 10 } = childrenBoundingClientRect;

  const style = useStyle(
    {
      display: display ? "inherit" : "none",
      pointerEvents: "none",
      zIndex: 10000,
      left: `${x - width / 2}px`,
      top: `${y - height - 20}px`,
      visibility: visible ? "inherit" : "hidden",
    },
    [width, height, display, visible, x, y]
  );

  return (
    <Fixed style={style}>
      <div ref={ref}>{children}</div>
    </Fixed>
  );
};

export default Tooltip;
