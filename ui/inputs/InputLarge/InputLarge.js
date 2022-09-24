import styled from "styled-components";
import bgCss from "../../BG/bg.css";
import { p35, p4, roundedXl, textBase } from "../../css";

const InputLarge = styled.input`
  ${textBase};
  ${bgCss};
  ${roundedXl};
  border: none;
  ${p35};
`;

export default InputLarge;
