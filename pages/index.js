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
import { Sidebar } from "../components";

import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

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

const Dialog = styled(UIDialog)`
  &::backdrop {
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(0px);
  }
  &[data-open="true"] {
    color: #e18728;
  }
  &[data-open="false"] {
    color: #e18728;
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
      <Dialog open={isOpen} onClick={() => setIsOpen(false)}>
        <TileWhite>some</TileWhite>
      </Dialog>
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

const Layout = ({ main, sidebar, header }) => {
  return (
    <div>
      <div>{sidebar}</div>
      <div
        style={{
          paddingLeft: "80px",
          paddingRight: "50px",
        }}
      >
        <div>{header}</div>
        <div>{main}</div>
      </div>
    </div>
  );
};

// const Child = styled.div`
//   ${container("(min-width: 500px)")`
//     background-color: red;
//   `}
// `;
//
const Widget = ({ children }) => {
  const [{ isDragging }, ref] = useDrag(() => ({
    type: ItemTypes.WIDGET,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  return (
    <div
      ref={ref}
      className={"widget"}
      style={{
        opacity: isDragging ? 0.5 : 1,
      }}
    >
      {children}
    </div>
  );
};

const WidgetHolder = ({ children }) => {
  const [{ isOver }, ref] = useDrop(
    () => ({
      accept: ItemTypes.WIDGET,
      drop: () => {
        console.log("drop happened!");
      },
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
      }),
    }),
    []
  );

  return (
    <div
      ref={ref}
      style={{
        display: "inline-block",
        marginRight: "10px",
        width: "200px",
        height: "200px",
        backgroundColor: "gray",
      }}
    >
      {children}
    </div>
  );
};

const ItemTypes = {
  WIDGET: "widget",
};

const S = () => {
  return (
    <Tile
      style={{
        width: "100px",
        height: "100px",
      }}
    >
      <Tile.Head>some</Tile.Head>
    </Tile>
  );
};

export default function Home() {
  return (
    <Layout
      sidebar={<Sidebar />}
      header={<Header />}
      main={
        <div>
          <Flex>
            <ConfirmButton>Publish</ConfirmButton>
            <Button>Add a widget</Button>
            <MenuButton />
          </Flex>
          <DndProvider backend={HTML5Backend}>
            <Grid gutter={"1rem"}>
              <Grid.Item sm={80}>
                <Grid gutter={"1rem"}>
                  <Grid.Item sm={100}>
                    <Widget>
                      <Summary />
                    </Widget>
                  </Grid.Item>
                  <Grid.Item sm={50}>
                    <Widget>
                      <Sales />
                    </Widget>
                  </Grid.Item>
                  <Grid.Item sm={50}>
                    <Widget>
                      <Visitors />
                    </Widget>
                  </Grid.Item>
                </Grid>
              </Grid.Item>
              <Grid.Item sm={20}>
                <Widget>
                  <Insights />
                </Widget>
              </Grid.Item>
              <Grid.Item sm={50}>
                <Widget>
                  <Activity />
                </Widget>
              </Grid.Item>
              <Grid.Item sm={50}>
                <Orders />
              </Grid.Item>
            </Grid>
          </DndProvider>
          <Tile>
            <Title>Customer's cart</Title>
          </Tile>
        </div>
      }
    ></Layout>
  );
}
