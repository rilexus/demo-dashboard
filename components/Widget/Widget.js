import { useDrag, useDrop } from "react-dnd";
import Grid from "../Grid/Grid";
import { useStyle } from "../../ui/hooks";
import { replace } from "../../core/widget/widget";

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
        replace(name, droppedItem.name);
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
      // transition: "transform 200ms",
      // borderRadius: "1rem",
      // transform: isOver ? "scale(0.99)" : "scale(1)",
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
