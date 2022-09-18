import styled, { css } from "styled-components";
import { InputLarge, Tile, Title } from "../ui";
import { Button, ConfirmButton, MenuButton } from "../ui/buttons";
import Flex from "../ui/Flex/Flex";
import { colors } from "../ui/theme/theme";
import { Grid, Sidebar, Widget } from "../components";
import { DndProvider, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import { Insights } from "../widgets/Insights";
import { Carts } from "../widgets/Carts";
import { Orders } from "../widgets/Orders";
import { Activity } from "../widgets/Activity";
import { Visitors } from "../widgets/Visitors";
import { Sales } from "../widgets/Sales";

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

const Summary = () => {
  return (
    <BlackTile>
      <Tile.Head>
        <Title>Summary</Title>
      </Tile.Head>
    </BlackTile>
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

const widgets = [
  { name: "Summary", column: [1, 4], row: [1, 1] },
  {
    name: "Sales",
    column: [1, 2],
    row: [2, 3],
  },
  {
    name: "Visitors",
    column: [2, 4],
    row: [2, 3],
  },
  {
    name: "Insights",
    column: [4, 5],
    row: [1, 3],
  },
  {
    name: "Activity",
    column: [],
    row: [],
  },
  {
    name: "Orders",
    column: [],
    row: [],
  },
  {
    name: "Carts",
    column: [],
    row: [],
  },
];

const widgetMap = {
  Summary,
  Sales,
  Visitors,
  Activity,
  Orders,
  Insights,
  Carts,
};

const Dashboard = ({ children }) => {
  return <DndProvider backend={HTML5Backend}>{children}</DndProvider>;
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
          <Dashboard>
            <Grid gutter={"1rem"}>
              {widgets.map(({ name, column, row }) => {
                const Component = widgetMap[name];
                return (
                  <Grid.Item column={column} row={row}>
                    <Widget>
                      <Component />
                    </Widget>
                  </Grid.Item>
                );
              })}
            </Grid>
          </Dashboard>
        </div>
      }
    ></Layout>
  );
}
