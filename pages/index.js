import { InputLarge, Tile } from "../ui";
import { Button, ConfirmButton, MenuButton } from "../ui/buttons";
import Flex from "../ui/Flex/Flex";
import { Grid, Sidebar, Widget } from "../components";
import { DndProvider, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useWidgets } from "../core/widget/widget";
import { Dialog } from "../ui/Dialog";
import React, { useRef } from "react";
import styled from "styled-components";
import { colors, shadows } from "../ui/theme/theme";
import { md, sm } from "../ui/Grid/medias";

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

const Dashboard = ({ children }) => {
  return <DndProvider backend={HTML5Backend}>{children}</DndProvider>;
};

const TileWhite = styled(Tile)`
  background-color: ${colors("white.1")};
  box-shadow: ${shadows("2")};
`;

const TileMedia = styled.div`
  padding-top: 3rem;
  ${sm`
    width: 90vw;
    height: 90vh;
  `}
  ${md`
    width: 50vw;
    height: 50vh;
  `}
`;

const AddWidgetButton = (props) => {
  return <Button {...props}>Add widget</Button>;
};

export default function Home() {
  const [widgets] = useWidgets();
  const dialogRef = useRef(null);

  const open = () => {
    dialogRef.current.open();
  };

  const close = () => {
    dialogRef.current.close();
  };

  return (
    <Layout
      sidebar={<Sidebar />}
      header={<Header />}
      main={
        <div>
          <Flex>
            <ConfirmButton>Publish</ConfirmButton>
            <AddWidgetButton onClick={open} />
            <Dialog ref={dialogRef} onClick={close}>
              <TileMedia>
                <TileWhite>animated</TileWhite>
              </TileMedia>
            </Dialog>
            <MenuButton />
          </Flex>
          <Dashboard>
            <Grid gutter={"1rem"}>
              {widgets.map(({ name, column, row, Component }) => {
                return (
                  <Widget name={name} key={name} row={row} column={column}>
                    <Component />
                  </Widget>
                );
              })}
            </Grid>
          </Dashboard>
        </div>
      }
    ></Layout>
  );
}
