import { Tile, Title } from "../../ui";
import styled from "styled-components";
import { colors } from "../../ui/theme/theme";
import Select from "../../ui/Select/Select";
import { m0, p0, scrollY, textBase } from "../../ui/css";
import { flex } from "../../ui/css/display";
import { scrollbarNoneCss } from "../../ui/css/scrollbar";
import { fontMedium } from "../../ui/css/fontWight";

const orders = [
  {
    id: "#11133",
    time: "12:30PM",
    user: {
      name: "Per Luc",
    },
    status: "failed",
    price: {
      currency: "$",
      value: 50.0,
    },
  },
  {
    id: "#21321",
    time: "12:30PM",
    user: {
      name: "Per Luc",
    },
    status: "pending",
    price: {
      currency: "$",
      value: 10.0,
    },
  },
  {
    id: "#34402",
    time: "12:30PM",
    user: {
      name: "Juli Dark",
    },
    status: "paid",
    price: {
      currency: "$",
      value: 30.0,
    },
  },
  {
    id: "#32432",
    time: "12:30PM",
    user: {
      name: "John Doe",
    },
    status: "paid",
    price: {
      currency: "$",
      value: 50.0,
    },
  },
  {
    id: "#98982",
    time: "12:30PM",
    user: {
      name: "John Doe",
    },
    status: "paid",
    price: {
      currency: "$",
      value: 10.0,
    },
  },
  {
    id: "#78978",
    time: "12:30PM",
    user: {
      name: "Smith Doe",
    },
    status: "paid",
    price: {
      currency: "$",
      value: 100.0,
    },
  },
];
const Pill = styled.div`
  border-radius: 0.3rem;
  padding: 0.3rem 0.7rem;
  font-size: 0.8rem;
  font-weight: 500;
`;
const FailedStatus = styled(Pill)`
  width: 45px;
  color: ${colors("red.2")};
  background-color: ${colors("red.1")};
`;
const PendingStatus = styled(Pill)`
  width: 45px;
  color: ${colors("yellow.5")};
  background-color: ${colors("yellow.2")};
`;

const PaidStatus = styled(Pill)`
  width: 45px;
  color: ${colors("green.1")};
  background-color: ${colors("green.10")};
`;

const Status = ({ status }) => {
  if (status === "paid") {
    return <PaidStatus>Paid</PaidStatus>;
  }
  if (status === "failed") {
    return <FailedStatus>Failed</FailedStatus>;
  }
  if (status === "pending") {
    return <PendingStatus>Pending</PendingStatus>;
  }
  return null;
};

const Time = styled.div`
  font-size: 0.9em;
  color: ${colors("gray.3")};
`;

const DarkSelect = styled(Select)`
  background-color: ${colors("gray.2")};
`;

const StatusSelect = () => {
  return (
    <DarkSelect>
      <option>All</option>
      <option>Paid</option>
      <option>Failed</option>
      <option>Pending</option>
    </DarkSelect>
  );
};

const Table = styled.table`
  width: 100%;
  list-style: none;
  ${m0};
  ${p0};
  padding-left: 1rem;
`;

const Td = styled.td`
  padding: 1rem 0;
  margin: 0.25rem 0.5rem;
`;

const Tr = styled.tr`
  ${textBase};

  z-index: 1000;
  transition: transform 70ms;
  cursor: pointer;
  &:hover {
    transform: scale(1.01);
  }
`;
const Scroll = styled.div`
  max-height: 300px;
  ${scrollbarNoneCss};
  ${scrollY};
  overflow-x: visible;
`;

const Name = styled.div`
  ${fontMedium};
`;

const ID = styled.div`
  ${fontMedium};
`;
const Orders = () => {
  return (
    <Tile
      style={{
        paddingLeft: 0,
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          right: "1rem",
          top: "1rem",
          zIndex: 1000,
        }}
      >
        <StatusSelect />
      </div>
      <Tile.Head
        style={{
          paddingLeft: "1rem",
          position: "relative",
        }}
      >
        <Title>Orders</Title>
      </Tile.Head>
      <Tile.Body>
        <Scroll>
          <Table>
            {orders.map((order) => {
              return (
                <Tr key={order.id}>
                  <Td
                    style={{
                      textAlign: "left",
                    }}
                  >
                    <ID>{order.id}</ID>
                  </Td>
                  <td>
                    <Time>{order.time}</Time>
                  </td>
                  <td>
                    <Name>{order.user.name}</Name>
                  </td>
                  <td
                    style={{
                      textAlign: "center",
                    }}
                  >
                    <Status status={order.status} />
                  </td>
                  <td
                    style={{
                      textAlign: "right",
                    }}
                  >
                    {order.price.currency}
                    {order.price.value}
                  </td>
                </Tr>
              );
            })}
          </Table>
        </Scroll>
      </Tile.Body>
    </Tile>
  );
};

export default Orders;
