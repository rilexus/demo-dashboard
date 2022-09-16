import styled from "styled-components";
import { ElevatedTile, Tile, Title } from "../../../../ui";
import { colors, gradients } from "../../../../ui/theme/theme";
import Flex from "../../../../ui/Flex/Flex";
import Tooltip from "../../../../ui/Tooltip/Tooltip";
import { rounded } from "../../../../ui/css";
import XAchse from "../components";
import { KebabButton } from "../../../../ui/buttons";

const DateText = styled.div`
  color: ${colors("gray.3")};
  font-size: 0.8rem;
  font-weight: 400;
  margin-bottom: 0.2rem;
`;

const Tip = ({ value }) => {
  return (
    <ElevatedTile>
      <DateText>12:30 AM - 01:00 PM</DateText>
      <div>
        <span
          style={{
            fontWeight: 500,
            fontSize: "1.5rem",
            marginRight: ".2rem",
          }}
        >
          {value}
        </span>
        <span
          style={{
            fontWeight: 500,
            fontSize: ".8rem",
          }}
        >
          Visitors
        </span>
      </div>
    </ElevatedTile>
  );
};

const BarWrapper = styled.div`
  width: 100%;
  min-height: 8rem;
  height: 100%;
  ${rounded};
  flex-direction: column-reverse;
  display: flex;

  background-color: ${colors("gray.2")};
  margin-right: 0.5rem;
`;

const BarInner = styled.div`
  ${rounded};
  width: 100%;
  cursor: pointer;
  background: ${gradients("4")};
  &:hover {
    background: ${gradients("5")};
  }
`;

const Bar = ({ id, flexGrow, onMouseEnter, onMouseLeave, background }) => {
  return (
    <BarWrapper>
      <BarInner
        id={id}
        onMouseLeave={onMouseLeave}
        onMouseEnter={onMouseEnter}
        style={{
          background,
          flexGrow,
        }}
      />
    </BarWrapper>
  );
};

const FlexWidth = styled.div`
  margin-right: 0.5rem;
  flex: 1;
  &:last-child {
    margin-right: 0;
  }
`;

const data = {
  1: 200,
  2: 100,
  3: 400,
  4: 50,
  5: 100,
  6: 300,
  7: 200,
  8: 190,
  9: 230,
  10: 199,
  11: 400,
};

const Visitors = () => {
  return (
    <Tile>
      <Tile.Head>
        <Flex justify={"space-between"}>
          <Title>Visitors</Title>
          <KebabButton />
        </Flex>
      </Tile.Head>
      <div
        style={{
          position: "relative",
        }}
      >
        <Flex justify={"space-around"}>
          {Object.entries(data).map(([key, value]) => {
            return (
              <FlexWidth key={`visitors-${key}`}>
                <Tooltip htmlFor={`visitors-${key}`}>
                  <Tip value={value} />
                </Tooltip>
                <Bar id={`visitors-${key}`} flexGrow={value / 500} />
              </FlexWidth>
            );
          })}
        </Flex>
        <XAchse />
      </div>
    </Tile>
  );
};

export default Visitors;
