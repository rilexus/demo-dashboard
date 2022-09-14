import styled, { css } from "styled-components";
import { m15, p25, px6, roundedLg, textSm, textXs } from "../../css";
import { fontMedium } from "../../css/fontWight";
import bgCss from "../../BG/bg.css";

const buttonStylelessCss = css`
  outline: none;
  cursor: pointer;
  border: none;
  background-color: transparent;
`;

const Button = styled.button`
  ${buttonStylelessCss};
  ${p25};
  ${px6};
  ${fontMedium};
  ${bgCss};
  ${roundedLg};
  outline: none;
  ${m15};

  ${textSm};

  transition: transform 120ms;
  transform: scale(1);
  &:hover {
    transform: scale(0.97);
  }
  &:active {
    transform: scale(0.93);
  }
`;

export default Button;
