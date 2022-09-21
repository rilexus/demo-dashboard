import themeColors from "./colors";
import { access } from "./ThemeProvider";
import shadowsTheme from "./shadows";

const theme = {
  colors: themeColors,
  shadows: shadowsTheme,
  gradients: {
    1: `linear-gradient(0deg, ${themeColors.green[2]} 0%, ${themeColors.green[3]} 100%);`,
    2: `linear-gradient(0deg, ${themeColors.green[5]} 0%, ${themeColors.green[6]} 100%);`,
    3: `linear-gradient(0deg, ${themeColors.green[8]} 0%, ${themeColors.green[7]} 100%);`,
    // visitors bar chart
    4: `linear-gradient(0deg, ${themeColors.yellow[1]} -180%, ${themeColors.yellow[2]} 100%);`,
    5: `linear-gradient(0deg, ${themeColors.yellow[3]} 0%, ${themeColors.yellow[4]} 100%);`,
  },
};

const gradients =
  (path) =>
  ({ theme }) =>
    access(`gradients.${path}`, theme);

const shadows =
  (path) =>
  ({ theme }) =>
    access(`shadows.${path}`, theme);

const memo = (factory) => {
  let lastArgs = null;
  let lastRes = null;

  return (...args) => {
    if (lastArgs === null && lastRes === null) {
      // run once, at first call
      lastArgs = args;
      lastRes = factory(...args);
    }

    if (args.some((arg, idx) => lastArgs[idx] !== arg)) {
      lastArgs = args;
      lastRes = factory(...args);
    }

    return lastRes;
  };
};

const colors = (path) => {
  const get = memo((theme, path) => {
    const keys = ["colors", ...path.split(".")];
    return keys.reduce((acc, cur) => {
      if (!acc[cur]) {
        throw new Error(`Theme: No theme value for ${path}.`);
      }
      return acc[cur];
    }, theme);
  });

  return ({ theme }) => {
    return get(theme, path);
  };
};

export { colors, gradients, shadows };
export default theme;
