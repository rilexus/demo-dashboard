import { useDrag, useDrop } from "react-dnd";
import Grid from "../Grid/Grid";
import { useStyle } from "../../ui/hooks";

const ItemTypes = {
  WIDGET: "widget",
};

const mergeRefs = (...refs) => {
  return (ref) => {
    refs.forEach((r) => {
      if (typeof r === "function") {
        r(ref);
      } else {
        r.current = ref;
      }
    });
  };
};

const useWidgetDragAndDrop = ({ name }) => {
  const [{ isDragging }, dragRef] = useDrag(() => ({
    type: ItemTypes.WIDGET,
    item: { name },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  const [{ isOver }, dropRef] = useDrop(
    () => ({
      accept: ItemTypes.WIDGET,
      drop: (droppedItem) => {
        // TODO: re-order widgets
        console.log(`drop of: ${droppedItem.name} on ${name}`);
      },
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
      }),
    }),
    []
  );

  return [{ isDragging, isOver }, mergeRefs(dragRef, dropRef)];
};

const Widget = ({ children, name, column, row }) => {
  const [{ isOver, isDragging }, ref] = useWidgetDragAndDrop({ name });

  const style = useStyle(
    {
      height: "100%",
      width: "100%",
      border: isOver ? "2px dashed gray" : "2px dashed transparent",
      opacity: isDragging ? 0.5 : 1,
    },
    [isOver, isDragging]
  );

  return (
    <Grid.Item column={column} row={row}>
      <div ref={ref} className={"widget"} style={style}>
        {children}
      </div>
    </Grid.Item>
  );
};

export default Widget;
