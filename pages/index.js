import styled, { css } from "styled-components";
import { BarChart, BG, InputLarge, Title } from "../ui";
import { p35, p5, roundedLg, roundedXl } from "../ui/css";
import { Button, ConfirmButton, MenuButton } from "../ui/buttons";
import Flex from "../ui/Flex/Flex";
import Grid from "../ui/Grid/Grid";
import { colors } from "../ui/theme/theme";
import { useCallback, useMemo } from "react";

const Tile = styled(BG)`
  ${roundedXl};
  ${p5};
`;

Tile.Head = ({ children }) => {
  return (
    <div
      style={{
        padding: ".5rem 0 1.1rem 0",
      }}
    >
      {children}
    </div>
  );
};

const Select = () => {
  return <div>select</div>;
};

const Header = () => {
  return (
    <div>
      <Select />
      <InputLarge placeholder={"Search"} />
    </div>
  );
};

const Visitors = () => {
  return (
    <Tile>
      <Tile.Head>
        <Title>Visitors</Title>
      </Tile.Head>
    </Tile>
  );
};

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

const Tooltip = ({ value }) => {
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
  1: 80,
  2: 10,
  3: 40,
  4: 30,
  5: 40,
  6: 50,
  7: 10,
  8: 40,
  9: 30,
  10: 10,
  11: 50,
};

const Sales = () => {
  const tooltip = useCallback(({ key, value }) => {
    return <Tooltip value={value} />;
  }, []);

  return (
    <Tile>
      <Tile.Head>
        <Title>Sales</Title>
      </Tile.Head>
      <div>
        <BarChart
          renderTooltip={tooltip}
          onMouseLeave={(e) => {
            // console.log(e);
          }}
          onMouseEnter={(e) => {
            // console.log(e);
          }}
          height={({ key, value }) => {
            return value / 100;
          }}
          data={data}
        />
      </div>
    </Tile>
  );
};

const BlackTile = styled(Tile)`
  background-color: ${colors("black.1")};
  color: white;
  padding: 1.6rem;
`;

const greenGradient = css`
  background: ${({ theme }) => {
    return theme.gradients[1];
  }};
`;

const Summary = () => {
  return (
    <BlackTile>
      <Title>Summary</Title>
    </BlackTile>
  );
};

const InsightsTile = styled(Tile)`
  ${greenGradient};
  color: white;
`;

const Insights = () => {
  return (
    <InsightsTile>
      <Tile.Head>
        <Title>Insights</Title>
      </Tile.Head>
    </InsightsTile>
  );
};

const Activity = () => {
  return (
    <Tile>
      <Title>Activity</Title>
    </Tile>
  );
};

const Orders = () => {
  return (
    <Tile>
      <Title>Orders</Title>
    </Tile>
  );
};

export default function Home() {
  return (
    <div>
      <Header></Header>
      <Flex>
        <ConfirmButton>Publish</ConfirmButton>
        <Button>Add a widget</Button>
        <MenuButton />
      </Flex>
      <Grid gutter={"1rem"}>
        <Grid.Item sm={80}>
          <Grid gutter={"1rem"}>
            <Grid.Item sm={100}>
              <Summary />
            </Grid.Item>
            <Grid.Item sm={50}>
              <Sales />
            </Grid.Item>
            <Grid.Item sm={50}>
              <Visitors />
            </Grid.Item>
          </Grid>
        </Grid.Item>
        <Grid.Item sm={20}>
          <Insights />
        </Grid.Item>
        <Grid.Item sm={50}>
          <Activity />
        </Grid.Item>
        <Grid.Item sm={50}>
          <Orders />
        </Grid.Item>
      </Grid>
      <Tile>
        <Title>Customer's cart</Title>
      </Tile>
    </div>
  );
}
