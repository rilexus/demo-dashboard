import React from "react";
import { IconButton } from "../IconButton";
import { KebabHorizontalIcon } from "../../icons";

const MenuButton = (props) => {
  return (
    <IconButton {...props}>
      <KebabHorizontalIcon />
    </IconButton>
  );
};

export default MenuButton;
