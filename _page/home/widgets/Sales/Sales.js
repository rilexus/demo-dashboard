import Flex from "../../../../ui/Flex/Flex";
import Tooltip from "../../../../ui/Tooltip/Tooltip";
import React from "react";
import styled from "styled-components";
import { p35, rounded, roundedLg } from "../../../../ui/css";
import { colors, gradients } from "../../../../ui/theme/theme";
import { Tile, Title } from "../../../../ui";
import XAchse from "../components";
import { KebabButton } from "../../../../ui/buttons";
import Container, { container } from "../../../../ui/utils/container/container";

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
  background: ${gradients("2")};
  &:hover {
    background: ${gradients("3")};
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

const StyledTooltip = styled.div`
  ${p35};
  ${roundedLg};
  background-color: white;

  box-shadow: 0px 2px 15px 5px rgba(0, 0, 0, 0.1);
`;
const DateText = styled.div`
  color: ${colors("gray.3")};
  font-size: 0.8rem;
  font-weight: 400;
  margin-bottom: 0.2rem;
`;

const Tip = ({ value }) => {
  return (
    <StyledTooltip>
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
          Items
        </span>
      </div>
    </StyledTooltip>
  );
};

const data = {
  sale1: 80,
  sale2: 10,
  sale3: 40,
  sale4: 30,
  sale5: 40,
  sale6: 50,
  sale7: 10,
  sale8: 40,
  sale9: 30,
  sale10: 10,
  sale11: 50,
};

const Sales = () => {
  return (
    <Tile>
      <Tile.Head>
        <Flex justify={"space-between"}>
          <Title>Sales</Title>
          <KebabButton />
        </Flex>
      </Tile.Head>
      <div
        style={
          {
            // position: "relative",
          }
        }
      >
        <Flex justify={"space-around"}>
          {Object.entries(data).map(([key, value]) => {
            return (
              <FlexWidth key={`sales-${key}`}>
                <div>
                  <Tooltip htmlFor={`sales-${key}`}>
                    <Tip value={value} />
                  </Tooltip>
                  <Bar id={`sales-${key}`} flexGrow={value / 100} />
                </div>
              </FlexWidth>
            );
          })}
        </Flex>
        <XAchse />
      </div>
    </Tile>
  );
};

export default Sales;
