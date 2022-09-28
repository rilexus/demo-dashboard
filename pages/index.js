import { InputLarge, Tile } from "../ui";
import { Button } from "../ui/buttons";
import Flex from "../ui/Flex/Flex";
import { Grid, Sidebar, Widget } from "../components";
import { DndProvider, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useWidgets } from "../core/widget/widget";
import React, { useEffect, useReducer, useRef } from "react";
import styled, { css } from "styled-components";
import { colors, shadows } from "../ui/theme/theme";
import { md, sm } from "../ui/Grid/medias";
import AnimatedDialog from "../ui/Dialog/Dialog";
import { scrollbarNoneCss } from "../ui/css/scrollbar";
import Select from "../ui/Select/Select";
import { useDashboardController } from "../core/DashbordController/DashbordController";
import dynamic from "next/dynamic";

const Header = () => {
  return (
    <Flex
      justify={"center"}
      style={{
        padding: ".5rem 0",
      }}
    >
      <InputLarge
        placeholder={"Search"}
        style={{
          width: "400px",
        }}
      />
    </Flex>
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

const resolveWidget = async (name) =>
  dynamic(() => import(`../widgets/${name}/${name}`), {
    ssr: false,
    loading: () => <div>Loading Activity ...</div>,
  });

const DynamicWidget = ({ name, ...props }) => {
  const ref = useRef(null);
  const [, rerender] = useReducer(() => ({}), {});

  useEffect(() => {
    resolveWidget(name).then((c) => {
      ref.current = c;
      rerender();
    });
  }, [name]);

  const Component = ref.current;

  return Component ? <Component {...props} /> : null;
};

const Dashboard = () => {
  const [controllerState] = useDashboardController();
  const widgets = controllerState.current?.widgets || [];
  return (
    <DndProvider backend={HTML5Backend}>
      <div>
        <Flex justify={"space-between"} align={"center"}>
          <div
            style={{
              paddingLeft: ".5rem",
              paddingBottom: "1.5rem",
            }}
          >
            <div
              style={{
                fontSize: "1.7rem",
                fontWeight: 600,
              }}
            >
              Dashboard
            </div>
            <div
              style={{
                fontSize: "0.9rem",
                fontWeight: 500,
                color: "gray",
              }}
            >
              Monday, 3 September 2022
            </div>
          </div>
          <Flex align={"center"}>
            {/*<ConfirmButton>Publish</ConfirmButton>*/}
            {/*<AddWidgetButton onClick={open} />*/}
            {/*<Dialog ref={dialogRef} onClick={close}>*/}
            {/*  <TileMedia>*/}
            {/*    <TileWhite>*/}
            {/*      <TileWhite.Body>*/}
            {/*        <WidgetsMenu />*/}
            {/*      </TileWhite.Body>*/}
            {/*    </TileWhite>*/}
            {/*  </TileMedia>*/}
            {/*</Dialog>*/}
            {/*<MenuButton />*/}
            <Select>
              <option>Today</option>
              <option>Yesterday</option>
            </Select>
          </Flex>
        </Flex>
        <Grid gutter={"1rem"}>
          {widgets.map((widget) => {
            return (
              <Widget widget={widget} key={widget.name}>
                <DynamicWidget
                  name={widget.component.name}
                  {...widget.component.props}
                />
              </Widget>
            );
          })}
        </Grid>
      </div>
    </DndProvider>
  );
};

const TileWhite = styled(Tile)`
  background-color: ${colors("white.1")};
  box-shadow: ${shadows("2")};
  overflow-y: scroll;
  position: relative;
  ${scrollbarNoneCss};
`;

const TileMedia = styled.div`
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

const SquareTile = ({ children, col, row, ...props }) => {
  return (
    <Tile
      style={{
        gridColumnStart: col,
        gridColumnEnd: col + 2,
        gridRowStart: row,
        gridRowEnd: row + 2,
        aspectRatio: 1,
      }}
      {...props}
    >
      {children}
    </Tile>
  );
};

const Rect = ({ children, row, ...props }) => {
  return (
    <Tile
      style={{
        gridColumnStart: 1,
        gridColumnEnd: 5,
        gridRowStart: row,
        gridRowEnd: row + 2,
        aspectRatio: "4 / 2",
      }}
      {...props}
    >
      {children}
    </Tile>
  );
};

const StyledMenu = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 1rem;
  row-gap: 1rem;
`;
const WidgetsMenu = () => {
  const ref = useRef(null);
  return (
    <div>
      <StyledMenu>
        <SquareTile col={1} row={1}>
          <div
            onClick={() => {
              ref.current.open();
            }}
          >
            some
          </div>
          <AnimatedDialog
            ref={ref}
            onClick={() => {
              ref.current.close();
            }}
          >
            <Tile>some</Tile>
          </AnimatedDialog>
        </SquareTile>
        <SquareTile col={3} row={1}>
          some
        </SquareTile>
        <Rect row={3}>some</Rect>
      </StyledMenu>
    </div>
  );
};

export default function Home() {
  const [widgets] = useWidgets();
  const dialogRef = useRef(null);

  const open = () => {
    dialogRef.current?.open();
  };

  const close = () => {
    dialogRef.current?.close();
  };

  return (
    <Layout
      sidebar={<Sidebar />}
      header={<Header />}
      main={
        <div>
          <Dashboard />
        </div>
      }
    ></Layout>
  );
}
