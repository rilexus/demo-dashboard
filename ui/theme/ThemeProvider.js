import React, { useMemo } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

const defaultTheme = {};

const access = (path, object) => {
  // Gets value from object by given path.
  const value = path.split(".").reduce((value, key) => value[key], object);
  if (!value) {
    console.warn(`Value is undefined for path: "${path}"!`);
  }
  return value;
};

const merge = (hostObj, obj) => {
  return Object.keys(obj).reduce((acc, key) => {
    if (key in acc && typeof acc[key] === "object") {
      return {
        ...acc,
        [key]: merge(acc[key], obj[key]),
      };
    }
    return { ...acc, [key]: obj[key] };
  }, hostObj);
};

const reconcile = (defaultTheme, customTheme) => {
  const rec = Object.entries(customTheme).reduce((acc, [key, value]) => {
    if (typeof value === "function") {
      return {
        [key]: value({
          theme: defaultTheme,
        }),
        ...acc,
      };
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});

  return merge(defaultTheme, rec);
};

const ThemeProvider = ({ theme, children }) => {
  const reconciledTheme = useMemo(() => {
    if (theme) {
      return reconcile(defaultTheme, theme);
    }
    return defaultTheme;
  }, [theme]);

  return (
    <StyledThemeProvider theme={reconciledTheme}>
      {children}
    </StyledThemeProvider>
  );
};

export { access };
export default ThemeProvider;
