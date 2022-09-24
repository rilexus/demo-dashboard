import styled from "styled-components";
import BG from "../BG/BG";
import { p5, roundedXl } from "../css";

const Tile = styled(BG)`
  ${roundedXl};
  ${p5};
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

Tile.Head = ({ children, ...props }) => {
  return (
    <div
      {...props}
      style={{
        paddingBottom: "1rem",
        maxHeight: "2rem",
        flexGrow: 1,
        ...props.style,
      }}
    >
      {children}
    </div>
  );
};

Tile.Body = ({ children }) => {
  return (
    <div
      style={{
        flex: "auto",
      }}
    >
      {children}
    </div>
  );
};

Tile.Footer = ({ children }) => {
  return (
    <div
      style={{
        paddingTop: ".3rem",
      }}
    >
      {children}
    </div>
  );
};

export default Tile;
