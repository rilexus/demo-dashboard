import styled, { css } from "styled-components";

const buttonStylelessCss = css`
  outline: none;
  cursor: pointer;
  border: none;
  background-color: transparent;
`;

const ButtonStyleless = styled.button`
  ${buttonStylelessCss};
`;

export default ButtonStyleless;
