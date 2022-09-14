import styled, { css } from "styled-components";
import { BG, InputLarge, Title } from "../ui";
import { p35, roundedXl } from "../ui/css";
import { Button, ConfirmButton, MenuButton } from "../ui/buttons";
import Flex from "../ui/Flex/Flex";

const Tile = styled(BG)`
  ${roundedXl};
  ${p35};
`;

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

export default function Home() {
  return (
    <div>
      <Header></Header>
      <Flex>
        <ConfirmButton>Publish</ConfirmButton>
        <Button>Add a widget</Button>
        <MenuButton />
      </Flex>

      <Tile>
        <Title>Customer's cart</Title>
      </Tile>
    </div>
  );
}
