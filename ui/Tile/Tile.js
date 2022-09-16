import styled from "styled-components";
import BG from "../BG/BG";
import { p5, roundedXl } from "../css";

const Tile = styled(BG)`
  ${roundedXl};
  ${p5};
`;

Tile.Head = ({ children }) => {
  return (
    <div
      style={{
        padding: "0.3rem 0 .8rem 0",
      }}
    >
      {children}
    </div>
  );
};

export default Tile;
