import { InputLarge, Tile } from "../ui";
import { Button, ConfirmButton, MenuButton } from "../ui/buttons";
import Flex from "../ui/Flex/Flex";
import { Grid, Sidebar, Widget } from "../components";
import { DndProvider, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useWidgets } from "../core/widget/widget";
import { Dialog } from "../ui/Dialog";
import { forwardRef, useImperativeHandle, useRef, useState } from "react";
import styled from "styled-components";
import { colors, shadows } from "../ui/theme/theme";
import { TransitionGroup } from "react-transition-group";
import {
  FadeInTransition,
  ScaleTransition,
  TranslateTransition,
} from "react-transitions-library";
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

const DialogTransition = ({ children, onExit, ...props }) => {
  return (
    <FadeInTransition timeout={200} from={0} to={1} onExit={onExit} {...props}>
      <TranslateTransition
        timeout={400}
        from={["0px", "0px"]}
        to={["0px", "-3rem"]}
        {...props}
      >
        <ScaleTransition timeout={400} from={0.98} to={1} {...props}>
          {children}
        </ScaleTransition>
      </TranslateTransition>
    </FadeInTransition>
  );
};

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

const AnimatedDialog = forwardRef(function AnimatedDialog(
  { children, onClick, ...props },
  ref
) {
  const [isOpen, setIsOpen] = useState(false);
  const [animate, setAnimate] = useState(false);

  const open = () => {
    setIsOpen(true);
    setAnimate(true);
  };

  const close = () => {
    setIsOpen(false);
  };

  useImperativeHandle(
    ref,
    () => {
      return {
        open,
        close: () => {
          setAnimate(false);
        },
      };
    },
    []
  );

  return (
    <Dialog open={isOpen} onClick={onClick}>
      <DialogTransition in={animate} onExited={close}>
        <TileMedia>
          <TileWhite>{children}</TileWhite>
        </TileMedia>
      </DialogTransition>
    </Dialog>
  );
});

export default function Home() {
  const [widgets] = useWidgets();

  const ref = useRef(null);

  return (
    <Layout
      sidebar={<Sidebar />}
      header={<Header />}
      main={
        <div>
          <Flex>
            <ConfirmButton>Publish</ConfirmButton>
            <Button onClick={() => ref.current.open()}>Add a widget</Button>
            <AnimatedDialog ref={ref} onClick={() => ref.current.close()}>
              animated
            </AnimatedDialog>
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
