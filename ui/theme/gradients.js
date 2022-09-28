import themeColors from "./colors";

const gradients = {
  1: `linear-gradient(0deg, ${themeColors.green[2]} 0%, ${themeColors.green[3]} 100%);`,
  2: `linear-gradient(0deg, ${themeColors.green[5]} 0%, ${themeColors.green[6]} 100%);`,
  3: `linear-gradient(0deg, ${themeColors.green[8]} 0%, ${themeColors.green[7]} 100%);`,
  // visitors bar chart
  4: `linear-gradient(0deg, ${themeColors.yellow[1]} -180%, ${themeColors.yellow[2]} 100%);`,
  5: `linear-gradient(0deg, ${themeColors.yellow[3]} 0%, ${themeColors.yellow[4]} 100%);`,
  6: `linear-gradient(0deg, rgba(232,178,87,0) 5%, ${themeColors.green[11]} 100%)`,
};
export default gradients;
