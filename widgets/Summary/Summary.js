import styled from "styled-components";
import { Tile, Title } from "../../ui";
import { colors } from "../../ui/theme/theme";

const BlackTile = styled(Tile)`
  background-color: ${colors("black.1")};
  color: white;
  padding: 1.6rem;
`;

const Summary = () => {
  return (
    <BlackTile>
      <Tile.Head>
        <Title>Summary</Title>
      </Tile.Head>
    </BlackTile>
  );
};

export default Summary;
