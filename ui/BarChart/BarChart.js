import styled from "styled-components";
import { colors, gradients } from "../theme/theme";
import Flex from "../Flex/Flex";
import { useEffect, useMemo, useRef, useState } from "react";
import { rounded } from "../css";
import { useStyle } from "../hooks";
import Tooltip from "../Tooltip/Tooltip";

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

const Bar = ({ id, flexGrow, onMouseEnter, onMouseLeave }) => {
  return (
    <BarWrapper>
      <BarInner
        id={id}
        onMouseLeave={onMouseLeave}
        onMouseEnter={onMouseEnter}
        style={{
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

const BarChart = ({
  data,
  onMouseEnter,
  onMouseLeave,
  height,
  renderTooltip,
}) => {
  return (
    <div
      style={{
        position: "relative",
      }}
    >
      <Flex justify={"space-around"}>
        {Object.entries(data).map(([key, value]) => {
          return (
            <FlexWidth key={key}>
              <Tooltip htmlFor={key}>{renderTooltip({ key, value })}</Tooltip>
              <Bar
                id={key}
                onMouseLeave={() => {
                  onMouseLeave?.({ key, value });
                }}
                flexGrow={height?.({ key, value })}
                onMouseEnter={(e) => onMouseEnter?.({ key, value })}
              />
            </FlexWidth>
          );
        })}
      </Flex>
    </div>
  );
};

export default BarChart;
