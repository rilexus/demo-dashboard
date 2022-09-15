import styled from "styled-components";
import { colors, gradients } from "../theme/theme";
import Flex from "../Flex/Flex";
import { useMemo } from "react";
import { rounded } from "../css";

const BarWrapper = styled.div`
  width: 1.4rem;
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

const Bar = ({ flexGrow, onMouseEnter, onMouseLeave }) => {
  return (
    <BarWrapper>
      <BarInner
        onMouseLeave={onMouseLeave}
        onMouseEnter={onMouseEnter}
        style={{
          flexGrow,
        }}
      />
    </BarWrapper>
  );
};

const Tooltip = styled.div`
  position: absolute;
  top: 30%;
  background-color: white;
`;

const BarChart = ({ data, onMouseEnter, onMouseLeave, height }) => {
  return (
    <div
      style={{
        position: "relative",
      }}
    >
      <div></div>
      <Flex>
        {Object.entries(data).map(([key, value]) => {
          return (
            <Bar
              key={key}
              onMouseLeave={() => {
                onMouseLeave?.({ key, value });
              }}
              flexGrow={height?.({ key, value })}
              onMouseEnter={(e) => onMouseEnter?.({ key, value })}
            />
          );
        })}
      </Flex>
    </div>
  );
};

export default BarChart;
