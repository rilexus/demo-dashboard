import { match } from "../css-mediaquery/css-mediaquery";
import { css, ThemeProvider, useTheme } from "styled-components";
import { useEffect, useMemo, useRef, useState } from "react";

class ResizeSensor {
  handler = null;
  timeout = null;
  rect = {};
  element = null;
  constructor(handler) {
    this.handler = handler;
  }

  getPlainRect(element) {
    const r = element.getBoundingClientRect();
    return {
      x: r.x,
      y: r.y,
      //
      width: r.width,
      height: r.height,
      //
      top: r.top,
      bottom: r.bottom,
      left: r.left,
      right: r.right,
    };
  }

  observe(element) {
    this.element = element;
    this.rect = this.getPlainRect(this.element);

    this.handler(this.element);

    this.timeout = setInterval(() => {
      if (this.element && this.handler) {
        const rect = this.getPlainRect(element);

        const changed = Object.entries(this.rect).some(([key, value]) => {
          return rect[key] !== value;
        });

        if (changed) {
          this.rect = rect;
          this.handler(element);
        }
      }
    }, 60);
  }

  unobserve() {
    clearInterval(this.timeout);
  }
}

const container = (query) => {
  return (...args) => {
    return ({ theme: { container } }) => {
      const { width } = container;
      const isMatch = match(query, { type: "all", width: `${width}px` });
      if (!isMatch) {
        return "";
      }
      return css`
        ${args}
      `;
    };
  };
};

const Container = ({ children, ...props }) => {
  const ref = useRef(null);
  const theme = useTheme();
  const [rect, setRect] = useState({});

  useEffect(() => {
    const element = ref.current;
    const handle = (element) => {
      const r = element.getBoundingClientRect();
      setRect({
        x: r.x,
        y: r.y,
        //
        width: r.width,
        height: r.height,
        //
        top: r.top,
        bottom: r.bottom,
        left: r.left,
        right: r.right,
      });
    };
    let observer = null;
    if (element) {
      observer = new ResizeSensor(handle).observe(element);
    }

    return () => {
      if (observer) {
        observer.unobserve(element);
      }
    };
  }, []);

  const context = useMemo(() => ({ ...theme, container: rect }), [theme, rect]);

  return (
    <div {...props} ref={ref}>
      <ThemeProvider theme={context}>{children}</ThemeProvider>
    </div>
  );
};
export { container };
export default Container;
