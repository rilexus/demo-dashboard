import styled from "styled-components";
import { colors, gradients } from "../../ui/theme/theme";
import { ElevatedTile } from "../../ui";
import { rounded } from "../../ui/css";
import Tile from "../../ui/Tile/Tile";
import Flex from "../../ui/Flex/Flex";
import KebabButton from "../../ui/buttons/KebabButton/KebabButton";
import { Title } from "../../ui/typography";
import Tooltip from "../../ui/Tooltip/Tooltip";
import XAchse from "../../_page/home/widgets/components";

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
  min-height: 10rem;
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
  height: 100%;
  &:last-child {
    margin-right: 0;
  }
`;

const data = {
  visitor1: 200,
  visitor2: 100,
  visitor3: 400,
  visitor4: 50,
  visitor5: 100,
  visitor6: 300,
  visitor7: 200,
  visitor8: 190,
  visitor9: 230,
  visitor10: 199,
  visitor11: 400,
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
      <Tile.Body>
        <Flex
          justify={"space-around"}
          style={{
            height: "100%",
          }}
        >
          {Object.entries(data).map(([key, value]) => {
            return (
              <FlexWidth key={`visitors-${key}`}>
                <div
                  style={{
                    height: "100%",
                  }}
                >
                  <Tooltip htmlFor={`visitors-${key}`}>
                    <Tip value={value} />
                  </Tooltip>
                  <Bar id={`visitors-${key}`} flexGrow={value / 500} />
                </div>
              </FlexWidth>
            );
          })}
        </Flex>
      </Tile.Body>
      <Tile.Footer>
        <XAchse />
      </Tile.Footer>
    </Tile>
  );
};

export default Visitors;
