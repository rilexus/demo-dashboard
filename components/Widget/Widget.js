import { useDrag, useDrop } from "react-dnd";
import Grid from "../Grid/Grid";
import { useStyle } from "../../ui/hooks";
import { reorder } from "../../core/widget/widget";

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

const useWidgetDragAndDrop = (widget) => {
  const [{ isDragging }, dragRef] = useDrag(() => ({
    type: ItemTypes.WIDGET,
    item: widget,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  const [{ isOver }, dropRef] = useDrop(
    () => ({
      accept: ItemTypes.WIDGET,
      drop: (droppedWidget) => {
        reorder(widget, droppedWidget);
      },
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
      }),
    }),
    []
  );

  return [{ isDragging, isOver }, mergeRefs(dragRef, dropRef)];
};

const Widget = ({ children, widget }) => {
  const { position, height, width } = widget;
  const [{ isOver, isDragging }, ref] = useWidgetDragAndDrop(widget);

  const style = useStyle(
    {
      height: "100%",
      width: "100%",
      boxSizing: "border-box",
      border: isOver ? "2px dashed gray" : "2px dashed transparent",
      opacity: isDragging ? 0.5 : 1,
    },
    [isOver, isDragging]
  );

  return (
    <Grid.Item
      row={[position[0], position[0] + height]}
      column={[position[1], position[1] + width]}
    >
      <div ref={ref} className={"widget"} style={style}>
        {children}
      </div>
    </Grid.Item>
  );
};

export default Widget;
