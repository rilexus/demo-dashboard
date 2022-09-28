import { Tile, Title } from "../../ui";
import Flex from "../../ui/Flex/Flex";
import { Button, KebabButton } from "../../ui/buttons";
import { Body, Subtitle } from "../../ui/typography";
import styled, { css } from "styled-components";
import { colors, gradients } from "../../ui/theme/theme";
import { buttonSubtleHoverCss } from "../../ui/buttons/Button/Button";
import { Dialog } from "../../ui/Dialog";
import { useRef } from "react";

const greenGradient = css`
  background: ${({ theme }) => {
    return theme.gradients[1];
  }};
`;
const InsightsTile = styled(Tile)`
  ${greenGradient};
  color: white;
`;

const GreedButton = styled(Button)`
  background-color: ${colors("green.9")};
  color: white;
  width: 100%;
  margin: 0;
  ${buttonSubtleHoverCss};
`;

const TileWhite = styled(Tile)`
  background-color: white;
`;

const StyledColumn = styled.div`
  border-radius: 0.4rem;
  background: ${gradients("6")};
`;

const ChartColumn = ({ height }) => {
  return <StyledColumn style={{ height }} />;
};

const Chart = () => {
  return (
    <Flex
      style={{
        height: "200px",
      }}
    >
      <div
        style={{
          flex: 0.5,
          marginRight: "1rem",
          height: "100%",
          display: "flex",
          flexDirection: "column-reverse",
        }}
      />
      <div
        style={{
          flex: 1,
          marginRight: "1rem",
          height: "100%",
          display: "flex",
          flexDirection: "column-reverse",
        }}
      >
        <ChartColumn height={"40%"} />
      </div>
      <div
        style={{
          flex: 1,
          marginRight: "1rem",
          height: "100%",
          display: "flex",
          flexDirection: "column-reverse",
        }}
      >
        <ChartColumn height={"60%"} />
      </div>
      <div
        style={{
          flex: 0.5,
          marginRight: "1rem",
          height: "100%",
          display: "flex",
          flexDirection: "column-reverse",
        }}
      ></div>
    </Flex>
  );
};

const Insights = () => {
  const dialogRef = useRef(null);
  return (
    <InsightsTile>
      <Tile.Head>
        <Flex justify={"space-between"}>
          <Title>Insights</Title>
          <KebabButton
            style={{
              color: "white",
            }}
          />
        </Flex>
      </Tile.Head>
      <Tile.Body>
        <Subtitle>More users return to your shop today.</Subtitle>
        <Body>
          You had 751 users yesterday. 51 came back today which means you had 10
          .3% of your users returned to your site.
        </Body>
        <Chart />
        <Dialog ref={dialogRef} onClick={() => dialogRef.current.close()}>
          <div
            style={{
              padding: "1rem",
            }}
          >
            <TileWhite>some</TileWhite>
          </div>
        </Dialog>
      </Tile.Body>
      <Tile.Footer>
        <GreedButton
          onClick={() => {
            dialogRef.current.open();
          }}
        >
          View More
        </GreedButton>
      </Tile.Footer>
    </InsightsTile>
  );
};

export default Insights;
