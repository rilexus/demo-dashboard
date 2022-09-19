import { useStyle } from "../../ui/hooks";

const Grid = ({ children, gutter }) => {
  const style = useStyle(
    {
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr 1fr",
      columnGap: gutter,
      rowGap: gutter,
    },
    [gutter]
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
