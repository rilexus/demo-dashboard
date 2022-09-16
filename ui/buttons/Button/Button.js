import styled, { css } from "styled-components";
import { m15, p25, p35, px6, roundedLg, textSm, textXs } from "../../css";
import { fontMedium } from "../../css/fontWight";
import bgCss from "../../BG/bg.css";
import ButtonStyleless from "../ButtonStyleless/ButtonStyleless";

const buttonHoverCss = css`
  transition: transform 120ms;
  transform: scale(1);

  &:hover {
    transform: scale(0.97);
  }
  &:active {
    transform: scale(0.93);
  }
`;

const buttonSubtleHoverCss = css`
  transition: transform 120ms;
  transform: scale(1);

  &:hover {
    transform: scale(0.99);
  }
  &:active {
    transform: scale(0.98);
  }
`;

const Button = styled(ButtonStyleless)`
  ${p35};
  ${px6};
  ${textSm};
  ${fontMedium};
  ${bgCss};
  ${roundedLg};
  outline: none;
  ${m15};
  ${buttonHoverCss};
`;
export { buttonSubtleHoverCss, buttonHoverCss };
export default Button;
