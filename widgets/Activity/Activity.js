import { Tile, Title } from "../../ui";
import Flex from "../../ui/Flex/Flex";
import styled from "styled-components";
import { scrollbarNoneCss } from "../../ui/css/scrollbar";
import { m0, p0, scrollY, textBase } from "../../ui/css";
import { block, flex } from "../../ui/css/display";
import Container, { container } from "../../ui/utils/container/container";
import Select from "../../ui/Select/Select";
import { colors } from "../../ui/theme/theme";

const activities = [
  {
    id: 1,
    img: "face_1.png",
    user: { name: "Peter Luc" },
    product: { name: "Balea" },
    time: "12:30MP",
  },
  {
    id: 2,
    img: "face_2.png",
    user: { name: "Alexander Krug" },
    product: { name: "Pantene" },
    time: "12:30MP",
  },
  {
    id: 3,
    img: "face_3.png",
    user: { name: "Alexander Krug" },
    product: { name: "Pantene" },
    time: "12:30MP",
  },
  {
    id: 4,
    img: "face_4.png",
    user: { name: "Alexander Krug" },
    product: { name: "Pantene" },
    time: "12:30MP",
  },
  {
    id: 5,
    img: "face_2.png",
    user: { name: "Alexander Krug" },
    product: { name: "Pantene" },
    time: "12:30MP",
  },
  {
    id: 6,
    img: "face_4.png",
    user: { name: "Alexander Krug" },
    product: { name: "Pantene" },
    time: "12:30MP",
  },
];

const Img = styled.img`
  ${block};
  width: 50px;
  height: auto;
  border-radius: 10px;
  margin-right: 1rem;
  border: 1px solid #e6e6e6;
`;

const NameContainer = styled.div`
  font-weight: 500;
  margin-right: 0.3em;
  ${container("(max-width: 380px)")`
    display: none;
  `}
`;

const TimeContainer = styled.div`
  color: gray;
  font-size: 0.9em;
  ${container("(max-width: 480px)")`
    display: none;
  `};
  ${container("(max-width: 380px)")`
    display: block;
  `};
`;

const ProductNameContainer = styled.div`
  font-weight: 500;
  ${container("(max-width: 420px)")`
    display: none
  `};
`;

const ScrollUl = styled.ul`
  ${scrollbarNoneCss};
  list-style: none;
  max-height: 300px;
  ${scrollY};
  overflow-x: visible;
  ${m0};
  ${p0};
`;

const Li = styled.li`
  ${flex};
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0.5rem;

  ${textBase};

  z-index: 1000;
  transition: transform 70ms;
  margin: 0.25rem 0.5rem;
  cursor: pointer;
  &:hover {
    transform: scale(1.02);
  }
`;

const withCssContainer = (Component) => {
  const WithCssContainer = (props) => {
    return (
      <Container>
        <Component {...props} />
      </Container>
    );
  };

  return WithCssContainer;
};

const ProductPublishedContainer = styled.div`
  display: none;
  ${container("(max-width: 380px)")`
    display: block;
  `};
`;
const PublishedProductContainer = styled.div`
  display: block;
  margin-right: 0.5em;
  ${container("(max-width: 380px)")`
    display: none;
  `};
`;
const DarkSelect = styled(Select)`
  background-color: ${colors("gray.2")};
`;

const ActivitySelect = () => {
  return (
    <DarkSelect>
      <option>Publications</option>
      <option>Registrations</option>
      <option>Purchases</option>
    </DarkSelect>
  );
};

const Activity = withCssContainer(() => {
  return (
    <Tile
      style={{
        paddingLeft: "0",
        paddingRight: "0",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          right: "1rem",
          top: "1rem",
        }}
      >
        <ActivitySelect />
      </div>
      <Tile.Head>
        <Title
          style={{
            marginLeft: "1rem",
          }}
        >
          Activity
        </Title>
      </Tile.Head>
      <Tile.Body>
        <ScrollUl>
          {activities.map((act) => {
            return (
              <Li key={act.id}>
                <Flex align={"center"}>
                  <Img src={act.img} alt="" />
                  <NameContainer>{act.user.name}</NameContainer>
                  <ProductPublishedContainer>
                    Product published
                  </ProductPublishedContainer>
                  <PublishedProductContainer>
                    published product
                  </PublishedProductContainer>
                  <ProductNameContainer>
                    {act.product.name}
                  </ProductNameContainer>
                </Flex>
                <TimeContainer>{act.time}</TimeContainer>
              </Li>
            );
          })}
        </ScrollUl>
      </Tile.Body>
    </Tile>
  );
});

export default Activity;
