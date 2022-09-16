import styled, { css } from "styled-components";
import { InputLarge, Tile, Title } from "../ui";
import { Button, ConfirmButton, KebabButton, MenuButton } from "../ui/buttons";
import Flex from "../ui/Flex/Flex";
import Grid from "../ui/Grid/Grid";
import { colors } from "../ui/theme/theme";
import { Sales, Visitors } from "../_page/home/widgets";
import { Body, Subtitle } from "../ui/typography";
import { buttonSubtleHoverCss } from "../ui/buttons/Button/Button";
import { Dialog as UIDialog } from "../ui/Dialog";
import { useState } from "react";

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

const D = styled(UIDialog)`
  &::backdrop {
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(0px);
  }
`;
const Insights = () => {
  const [isOpen, setIsOpen] = useState(false);
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
      <Subtitle>More users return to your shop today.</Subtitle>
      <Body>
        You had 751 users yesterday. 51 came back today which means you had 10
        .3% of your users returned to your site.
      </Body>
      <D open={isOpen}>
        <TileWhite>some</TileWhite>
      </D>
      <GreedButton
        onClick={() => {
          setIsOpen(true);
        }}
      >
        View More
      </GreedButton>
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
