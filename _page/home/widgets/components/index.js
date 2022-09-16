import Flex from "../../../../ui/Flex/Flex";

const XAchse = () => {
  return (
    <Flex
      justify={"space-between"}
      style={{
        top: "0.5rem",
        padding: "0 .5rem",
        position: "relative",
        fontSize: ".6rem",
      }}
    >
      <div
        style={{
          color: "gray",
        }}
      >
        06:00
      </div>
      <div
        style={{
          color: "gray",
        }}
      >
        12:00
      </div>
      <div
        style={{
          color: "gray",
        }}
      >
        Now
      </div>
    </Flex>
  );
};

export default XAchse;
