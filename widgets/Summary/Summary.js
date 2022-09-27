import styled from "styled-components";
import { Tile, Title } from "../../ui";
import { colors } from "../../ui/theme/theme";
import GraphUpIcon from "../../ui/icons/GraphUpIcon";
import BG from "../../ui/BG/BG";
import { p5, rounded2xl } from "../../ui/css";
import FileOutlinedIcon from "../../ui/icons/FileOutlinedIcon";
import Flex from "../../ui/Flex/Flex";
import { ExitOutlinedIcon, PersonFilledIcon } from "../../ui/icons";
import { scrollbarNoneCss } from "../../ui/css/scrollbar";

const IconTile = styled(BG)`
  ${rounded2xl};
  ${p5};
  background-color: ${colors("gray.4")};
  padding: 0.85rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 1.5rem;
  width: 1.5rem;
  height: 1.5rem;
  color: white;
  margin-right: 0.5rem;
`;

const Margin = ({ top = 0, right = 0, bottom = 0, left = 0, children }) => {
  return (
    <div
      style={{
        margin: `${top} ${right} ${bottom} ${left}`,
      }}
    >
      {children}
    </div>
  );
};

const BlackTile = styled(Tile)`
  background-color: ${colors("black.1")};
  color: white;
  padding: 1.6rem;
  ${scrollbarNoneCss};
  overflow-x: scroll;
`;

const GraphIcon = () => {
  return (
    <div>
      <IconTile>
        <GraphUpIcon />
      </IconTile>
    </div>
  );
};

const SectionTitle = styled.div`
  color: gray;
  font-size: 0.9rem;
  white-space: nowrap;
`;
const SectionValue = styled.div`
  font-size: 1.5rem;
  font-weight: 500;
`;

const Revenue = () => {
  return (
    <Flex>
      <GraphIcon />
      <div>
        <SectionTitle>Revenue</SectionTitle>
        <SectionValue>$12200</SectionValue>
      </div>
    </Flex>
  );
};

const FileIcon = () => {
  return (
    <div>
      <IconTile>
        <FileOutlinedIcon />
      </IconTile>
    </div>
  );
};

const PersonIcon = () => {
  return (
    <div>
      <IconTile>
        <PersonFilledIcon />
      </IconTile>
    </div>
  );
};

const ExitIcon = () => {
  return (
    <div>
      <IconTile>
        <ExitOutlinedIcon
          style={{
            position: "relative",
            left: "3px",
          }}
        />
      </IconTile>
    </div>
  );
};

const Customers = () => {
  return (
    <Flex>
      <PersonIcon />
      <div>
        <SectionTitle>Customers</SectionTitle>
        <SectionValue>420</SectionValue>
      </div>
    </Flex>
  );
};

const Bounce = () => {
  return (
    <Flex>
      <ExitIcon />
      <div>
        <SectionTitle>Bounce Rate</SectionTitle>
        <SectionValue>18%</SectionValue>
      </div>
    </Flex>
  );
};

const Orders = () => {
  return (
    <Flex>
      <FileIcon />
      <div>
        <SectionTitle>Orders</SectionTitle>
        <SectionValue>42</SectionValue>
      </div>
    </Flex>
  );
};

const Summary = () => {
  return (
    <BlackTile>
      <Tile.Head>
        <Title>Summary</Title>
      </Tile.Head>
      <Tile.Body>
        <Flex justify={"space-between"}>
          <Margin right={"1.5rem"}>
            <Revenue />
          </Margin>
          <Margin right={"1.5rem"}>
            <Orders />
          </Margin>
          <Margin right={"1.5rem"}>
            <Customers />
          </Margin>
          <Margin>
            <Bounce />
          </Margin>
        </Flex>
      </Tile.Body>
    </BlackTile>
  );
};

export default Summary;
