import styled from "styled-components";
import { Button } from "../Button";
import { colors } from "../../theme/theme";

const ConfirmButton = styled(Button)`
  background-color: ${colors("green.1")};
  color: white;
`;

export default ConfirmButton;
