import { ButtonStyleless } from "../index";
import { KebabHorizontalIcon } from "../../icons";
import React from "react";

const KebabButton = (props) => {
  return (
    <ButtonStyleless
      {...props}
      style={{
        ...props.style,
        fontSize: "1.3rem",
      }}
    >
      <KebabHorizontalIcon />
    </ButtonStyleless>
  );
};

export default KebabButton;
