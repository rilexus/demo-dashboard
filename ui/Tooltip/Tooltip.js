import styled from "styled-components";
import { useEffect, useRef, useState } from "react";
import { useStyle } from "../hooks";
import { p35, roundedLg } from "../css";

const Fixed = styled.div`
  position: fixed;
`;

// TODO: handle window corners overlap
const Tooltip = ({ htmlFor, children }) => {
  const [isDisplayed, setIsDisplayed] = useState(false);
  const [{ x, y }, setPosition] = useState({ x: 0, y: 0 });

  const [isVisible, setIsVisible] = useState(false);

  const ref = useRef();

  useEffect(() => {
    const element = document.getElementById(htmlFor);
    let timeout = null;

    const handleEnter = (e) => {
      setIsDisplayed(true);
      const { clientX, clientY } = e;
      setPosition({ x: clientX, y: clientY });
      timeout = setTimeout(() => {
        setIsVisible(true);
      }, 200);
    };

    const handleMove = (e) => {
      const { clientX, clientY } = e;
      setPosition({ x: clientX, y: clientY });
    };

    const handleLeave = () => {
      setIsDisplayed(false);
      setIsVisible(false);
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
      display: isDisplayed ? "inherit" : "none",
      pointerEvents: "none",
      zIndex: 10000,
      left: `${x - width / 2}px`,
      top: `${y - height - 20}px`,
      visibility: isVisible ? "inherit" : "hidden",
    },
    [width, height, x, y, isDisplayed, isVisible]
  );

  return (
    <Fixed style={style}>
      <div ref={ref}>{children}</div>
    </Fixed>
  );
};

export default Tooltip;
