import React from "react";
import { PersonFilledIcon } from "../../ui/icons";
import { Tile } from "../../ui";
import styled from "styled-components";
import { rounded2xl, roundedXl } from "../../ui/css";

const BG = styled(Tile)`
  padding: 0.85rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 1.5rem;
  width: 1.5rem;
  height: 1.5rem;
  color: gray;
  ${rounded2xl};

  &:hover {
    color: black;
  }
`;

const PersonButton = () => {
  return (
    <div>
      <BG>
        <PersonFilledIcon />
      </BG>
    </div>
  );
};

const Sidebar = () => {
  return (
    <div
      style={{
        width: "75px",
        height: "100vh",
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
        <PersonButton />
        <PersonButton />
      </div>
    </div>
  );
};

export default Sidebar;
