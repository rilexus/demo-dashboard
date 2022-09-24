import styled from "styled-components";
import { ButtonStyleless } from "../buttons";
import ArrowDown from "../icons/ArrowDownIcon";
import { colors } from "../theme/theme";
import bgCss from "../BG/bg.css";

const ArrowButton = ({ onClick, ...props }) => (
  <ButtonStyleless
    onClick={onClick}
    style={{
      ...props.style,
      display: "flex",
      alignItems: "center",
    }}
  >
    <ArrowDown height={"1.3em"} width={"1.3em"} />
  </ButtonStyleless>
);

const StyledSelect = styled.select`
  position: relative;

  // A reset of styles, including removing the default dropdown arrow
  appearance: none;
  // Additional resets for further consistency
  ${bgCss};

  width: 100%;

  font-family: inherit;
  font-size: inherit;
  font-weight: 500;

  cursor: pointer;
  line-height: inherit;
  outline: none;

  border-color: transparent;
  border-radius: 0.5rem;

  padding: 0.5em 0.9em;
  padding-right: 1.5em;
  margin: 0;
`;

const Select = ({ children, ...props }) => {
  return (
    <div
      style={{
        position: "relative",
      }}
    >
      <StyledSelect {...props}>{children}</StyledSelect>
      <ArrowButton
        style={{
          pointerEvents: "none",
          position: "absolute",
          right: 0,
          top: "50%",
          transform: "translateY(-50%)",
        }}
      />
    </div>
  );
};

export default Select;
