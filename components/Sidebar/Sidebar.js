import React from "react";
import { PersonFilledIcon } from "../../ui/icons";

import styled from "styled-components";
import { p5, rounded2xl } from "../../ui/css";

import BG from "../../ui/BG/BG";
import WidgetsFilledIcon from "../../ui/icons/WidgetsFilledIcon";

const Tile = styled(BG)`
  ${rounded2xl};
  ${p5};

  padding: 0.85rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 1.5rem;
  width: 1.5rem;
  height: 1.5rem;
  color: gray;

  &:hover {
    color: black;
  }
`;

const PersonButton = () => {
  return (
    <div>
      <Tile>
        <PersonFilledIcon />
      </Tile>
    </div>
  );
};

const WidgetButton = () => {
  return (
    <div>
      <Tile>
        <WidgetsFilledIcon />
      </Tile>
    </div>
  );
};

const Sidebar = () => {
  return (
    <div
      style={{
        width: "75px",
        height: "100vh",
        paddingTop: "1rem",
        borderRight: "1px solid #ececec",
        left: 0,
        top: 0,
        zIndex: 10000,
        position: "fixed",
      }}
    >
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <WidgetButton />
        <PersonButton />
      </div>
    </div>
  );
};

export default Sidebar;
