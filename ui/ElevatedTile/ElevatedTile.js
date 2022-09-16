import styled, { css } from "styled-components";
import { p35, roundedLg } from "../css";
import { colors } from "../theme/theme";

const elevatedTileCss = css`
  ${p35};
  ${roundedLg};
  background-color: ${colors("white.1")};
  box-shadow: 0px 2px 15px 5px rgba(0, 0, 0, 0.1);
`;

const ElevatedTile = styled.div`
  ${elevatedTileCss};
`;

export { elevatedTileCss };
export default ElevatedTile;
