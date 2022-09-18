import { Tile, Title } from "../../ui";
import Flex from "../../ui/Flex/Flex";
import { Button, KebabButton } from "../../ui/buttons";
import { Body, Subtitle } from "../../ui/typography";
import styled, { css } from "styled-components";
import { colors } from "../../ui/theme/theme";
import { buttonSubtleHoverCss } from "../../ui/buttons/Button/Button";
import { Dialog as UIDialog } from "../../ui/Dialog";
import { useState } from "react";

const greenGradient = css`
  background: ${({ theme }) => {
    return theme.gradients[1];
  }};
`;
const InsightsTile = styled(Tile)`
  ${greenGradient};
  color: white;
`;

const GreedButton = styled(Button)`
  background-color: ${colors("green.9")};
  color: white;
  width: 100%;
  margin: 0;
  ${buttonSubtleHoverCss};
`;

const TileWhite = styled(Tile)`
  background-color: white;
`;

const Dialog = styled(UIDialog)`
  &::backdrop {
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(0px);
  }
  &[data-open="true"] {
    color: #e18728;
  }
  &[data-open="false"] {
    color: #e18728;
  }
`;

const Insights = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <InsightsTile>
      <Tile.Head>
        <Flex justify={"space-between"}>
          <Title>Insights</Title>
          <KebabButton
            style={{
              color: "white",
            }}
          />
        </Flex>
      </Tile.Head>
      <Tile.Body>
        <Subtitle>More users return to your shop today.</Subtitle>
        <Body>
          You had 751 users yesterday. 51 came back today which means you had 10
          .3% of your users returned to your site.
        </Body>
        <Dialog open={isOpen} onClick={() => setIsOpen(false)}>
          <TileWhite>some</TileWhite>
        </Dialog>
      </Tile.Body>
      <Tile.Footer>
        <GreedButton
          onClick={() => {
            setIsOpen(true);
          }}
        >
          View More
        </GreedButton>
      </Tile.Footer>
    </InsightsTile>
  );
};

export default Insights;
