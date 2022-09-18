import { useStyle } from "../../ui/hooks";

const Grid = ({ children }) => {
  const style = useStyle(
    {
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr 1fr",
      columnGap: "1rem",
      rowGap: "1rem",
    },
    []
  );
  return <div style={style}>{children}</div>;
};
const Item = ({ children, column = [], row = [] }) => {
  const [colStart, colEnd] = column;
  const [rowStart, rowEnd] = row;
  const style = useStyle(
    {
      gridColumnStart: colStart,
      gridColumnEnd: colEnd,
      gridRowStart: rowStart,
      gridRowEnd: rowEnd,
    },
    [rowStart, rowEnd, colStart, colEnd]
  );
  return <div style={style}>{children}</div>;
};
Grid.Item = Item;

export default Grid;
