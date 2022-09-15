import styled, { css } from "styled-components";
import { BarChart, BG, InputLarge, Title } from "../ui";
import { p35, roundedXl } from "../ui/css";
import { Button, ConfirmButton, MenuButton } from "../ui/buttons";
import Flex from "../ui/Flex/Flex";
import Grid from "../ui/Grid/Grid";
import { colors } from "../ui/theme/theme";

const Tile = styled(BG)`
  ${roundedXl};
  ${p35};
`;

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
      <Title>Visitors</Title>
    </Tile>
  );
};

const Sales = () => {
  return (
    <Tile>
      <Title>Sales</Title>
      <div>
        <BarChart
          onMouseLeave={(e) => {
            console.log(e);
          }}
          onMouseEnter={(e) => {
            // console.log(e);
          }}
          height={({ key, value }) => {
            return value / 80;
          }}
          data={{
            1: 80,
            2: 10,
            3: 40,
            4: 30,
          }}
        />
      </div>
    </Tile>
  );
};

const BlackTile = styled(Tile)`
  background-color: ${colors("black.1")};
  color: white;
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
      <Title>Insights</Title>
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
