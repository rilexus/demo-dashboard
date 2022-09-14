import themeColors from "./colors";

const theme = {
  colors: themeColors
}

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

export { colors };
export default theme;
